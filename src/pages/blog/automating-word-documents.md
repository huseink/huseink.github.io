---
layout: ../../layouts/Post.astro
title: Automating Word Document Creation with Python and FastAPI (Using python-docx-template)
description: How to generate Word documents dynamically using Python
locale: EN
tags:
  - python
  - docx
  - templates
  - jinja2
date: 2024-12-23T13:10:23.402Z
---

## Automating Word Document Creation with Python and FastAPI (Using python-docx-template)

![Photo by [Ed Hardie](https://unsplash.com/@impelling?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/9312/0*-n6rbM97SPubI3eC)

Ever needed to **create** a **Word** document filled with specific content? Better yet, have you wished to **automate** the process so you don’t have to manually update it each time the **context** changes?

Well, look no further — **Python**, as always, has got us covered. With a library called *“[python-docx-template”](https://docxtpl.readthedocs.io/en/latest/)*, dynamically rendering content into a template Word document becomes not only easy but also efficient.

So, what exactly do I mean by **dynamically** generating Word documents?

Take a basic example: an **invoice**.

We all know how tiring it can be to manually update the data inside an invoice every time you need to send it to a customer. Sometimes, it’s simply not feasible to do it manually — like when the input data comes from an API call, and you need to auto-fill the details to generate an invoice for the customer.

This is where **dynamic** Word document **generation** helps us.

Imagine you have a Word document **template** that looks like this:

![Original Word template](https://cdn-images-1.medium.com/max/2000/1*uONWGm7e1324lcJzcigoUw.png)

The receiver’s and sender’s company details may **change** **over time**, and the items listed? They’ll almost always be **different**. One day it could be a **single** item; the next, it could be a **hundred**.

So, how do we go about **generating** an invoice **dynamically** using a **template**?

First, we need to take our **template** Word document and **modify** it to make it **Jinja2-compatible**. By incorporating **Jinja2** templating language features, we gain powerful capabilities like **conditional rendering,** **looping** over **arrays** of data, and more. This allows us to **dynamically** **populate** the document based on the **context** provided.

* To learn more about **Jinja2** templating language, please follow this link: [*https://jinja.palletsprojects.com/en/stable/templates/](https://jinja.palletsprojects.com/en/stable/templates/#)*

After modifying the original template and making it **Jinja2-compatible**, this is what we get:

![Jinja2 Word template](https://cdn-images-1.medium.com/max/2000/1*WwutHHHBr15ANMsqFh24yw.png)

Now, I understand that expressions like **tr if — endif** and **tr for — endfor** might seem a bit confusing at first, but these are Jinja2-specific syntax for writing conditions and loops.

Basically, anything between “**{{ }}”** represents a **variable** that will be **rendered** with its **real value**. For example, “**{% tr if items %}”** ensures that the **items** variable **exists** in the **context** before attempting to render **table rows** for it. Meanwhile, “**{% tr for item in items %}”** **loops** over the provided **items**, and for each item, it **generates** a **table row **containing information like **item’s description **and **item’s amount**.

This way if the items array contains 100 objects, then the generated Word document will have 100 items rendered dynamically and so on.

* You can learn more about these **tags** and **Jinja2** templating language following these links:
[*https://docxtpl.readthedocs.io/en/latest/](https://docxtpl.readthedocs.io/en/latest/)*
[*https://jinja.palletsprojects.com/en/stable/templates/](https://jinja.palletsprojects.com/en/stable/templates/#)*

Now, let’s spin up a basic **FastApi** server and provide context to the **Jinja2** template file above using **Python**.

First, **create** a new empty **folder**, and then **run** the following command inside it to create a virtual environment:

    pip3 install virtualenv
    virtualenv -p python3 venv
    source venv/bin/activate

After creating and activating the virtual environment, **install** required **libraries**:

    pip install "fastapi[standard]" docx docxtpl pydantic requests

Then, Create a file “**main.py”** with:

    from fastapi import FastAPI
    
    app = FastAPI()
    
    
    @app.get("/")
    def read_root():
        return {"Hello": "World"}

If you make a **request** (using Postman, or your browser) to ***“localhost:8000”***, you should get this as the output:

    {
        "Hello": "World"
    }

Now that we have a basic endpoint running, we can start rendering context into Word template file.

Import your **Jinja2** modified Word template file into the root of your project like so:

![](https://cdn-images-1.medium.com/max/2000/1*IBOIVtjqQ2i1lCoRI9d1aQ.png)

Modify the main.py file to be:

    from fastapi import FastAPI
    from docxtpl import DocxTemplate, InlineImage
    from pydantic import BaseModel
    from typing import List
    from io import BytesIO
    from fastapi.responses import StreamingResponse
    from docx.shared import Mm
    import requests
    
    app = FastAPI()
    
    class Company(BaseModel):
        name: str
        logo: str | None = None
        address_line_1: str | None = None
        address_line_2: str | None = None
        address_line_3: str | None = None
        phone_number: str | None = None
        registered_id: str
    
    
    class BankInformation(BaseModel):
        name: str
        bank_name: str
        bank_address: str
        bank_swift_code: str
        account_number: str
        iban: str
    
    
    class Item(BaseModel):
        description: str
        amount: int
    
    
    class VatInformation(BaseModel):
        description: str
        percentage: int
        amount: int
    
    class InvoiceContext(BaseModel):
        company: Company
        billed_company: Company
        beneficiary: BankInformation
        sender: BankInformation
        items: List[Item]
        vat_info: VatInformation | None = None
    
        invoice_no: str
        invoice_date: str
        total_amount: int = 0
    
    
    def get_image_from_url(image_url: str):
        """Fetches an image from a provided URL and returns it as a BytesIO object."""
        response = requests.get(image_url)
        image = BytesIO(response.content)
        return image
    
    
    def process_logo(template, logo_url: str):
        """Process the logo URL and return the InlineImage if a valid URL is provided."""
        if logo_url:
            image = get_image_from_url(logo_url)
            return InlineImage(template, image, width=Mm(21))
        return None
    
    
    def process_total_amount(items: List[Item], vat_info: VatInformation | None) -> int:
        """
        Calculates the total amount for the invoice by summing the amounts of all items
        and adding the VAT (if provided).
        """
        total = sum(item.amount for item in items)
    
        if vat_info:
            # Calculate the VAT amount
            vat_amount = (total * vat_info.percentage) / 100
            total += vat_amount
    
        return total
    
    
    @app.post("/")
    async def create_invoice(context: InvoiceContext):
        # Load the template
        template = DocxTemplate("invoice_tpl.docx")
    
        context.company.logo = process_logo(template, context.company.logo)
        context.total_amount = process_total_amount(
            context.items, context.vat_info)
    
        # Render the template with the context
        template.render(context)
    
        # Save the document into a BytesIO buffer
        result = BytesIO()
        template.save(result)
    
        # Rewind the buffer to the beginning
        result.seek(0)
    
        # Return the result as a StreamingResponse
        return StreamingResponse(result,
                                 media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                 headers={"Content-Disposition": "attachment; filename=invoice.docx"})

Now, let’s test the endpoint by sending a **JSON body** and **retrieve** the **generated output**.

    {
      "company": {
        "name": "Tech Corp",
        "logo": "https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg",
        "address_line_1": "123 Tech Street",
        "address_line_2": "Suite 456",
        "address_line_3": "Tech City",
        "phone_number": "+1234567890",
        "registered_id": "TC12345"
      },
      "billed_company": {
        "name": "Client Inc.",
        "address_line_1": "789 Client Avenue",
        "address_line_2": "Floor 3",
        "address_line_3": "Client City",
        "phone_number": "+0987654321",
        "registered_id": "CI67890"
      },
      "beneficiary": {
        "name": "John Doe",
        "bank_name": "Global Bank",
        "bank_address": "123 Global Road, Cityville",
        "bank_swift_code": "GB1234XYZ",
        "account_number": "1234567890",
        "iban": "GB00BANK1234567890"
      },
      "sender": {
        "name": "Tech Corp",
        "bank_name": "TechBank",
        "bank_address": "456 Tech Avenue, Tech City",
        "bank_swift_code": "TB9876XYZ",
        "account_number": "9876543210",
        "iban": "GB00TBANK9876543210"
      },
      "items": [
        {
          "description": "Consulting services",
          "amount": 500
        },
        {
          "description": "Software license",
          "amount": 1200
        }
      ],
      "vat_info": {
        "description": "VAT at 20%",
        "percentage": 20,
        "amount": 340
      },
      "invoice_no": "INV123456",
      "invoice_date": "2024-12-23"
    }

The **output** examples:

![With Vat information provided](https://cdn-images-1.medium.com/max/2000/1*I76VTuMffWlWkpFT112UAg.png)

![Without Vat information](https://cdn-images-1.medium.com/max/2000/1*Z37YCSoOSDqquQ8PscrNmg.png)

![With 5 items](https://cdn-images-1.medium.com/max/2000/1*jksDsML7vInox6o1NNHf3Q.png)

## Conclusion

In this guide, we explored how to dynamically generate Word documents using python-docx-template and FastAPI. By combining Jinja2 templating with FastAPI, we created a flexible system to generate documents like invoices with dynamic data. This approach offers a simple, scalable solution for automating document creation based on user input.

* The **upcoming** **blog (Part 2) **will cover how to dynamically render context to **PDFs**.

You can **find** both the **template file **and the **main.py** file in the repository:
[*https://github.com/huseink/docx-dynamic-generation](https://github.com/huseink/docx-dynamic-generation)*

**Follow** me for more:
[**Husein Kantarci**
*Personal portfolio*huseink.dev](https://huseink.dev/)

[*https://www.linkedin.com/in/huseinkantarci/](https://www.linkedin.com/in/huseinkantarci/)*

[*https://github.com/huseink](https://github.com/huseink)*

[*https://gitlab.com/huseinkntrc](https://gitlab.com/huseinkntrc)*
