const section = document.querySelector("#quote");
section.style.padding = "1.5em 15em";
section.style.borderBottom = "0.5px solid rgb(114, 114, 114)";

fetch('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
.then(response => response.json())
.then((data)=>{
    let p = document.createElement('p');
    p.className = "quoteText";
    p.textContent = `${data["en"]} - ${data["author"]}`;
    p.style.color = "#FFFFFF";
    p.style.padding = "0";

    section.appendChild(p);
});