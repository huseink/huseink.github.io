---
layout: ../../layouts/Post.astro
title: Python Temel Kavramlar
description: Print, Matematiksel operatörler, Yorum satırları
locale: EN
tags:
  - python
date: 2022-10-19T13:10:23.402Z
hidden: True
---

## Print

Genel olarak herhangi bir yeni programlama dili öğrenirmeye ekranda **"Merhaba dünya!"** yazdırarak başlanır.

Python'da herhangi bir **metin** **çıktısı** almak için **print** fonksiyonu kullanılır. Print fonksiyonunu kullanarak **parantezler** **içine** istediğimiz **yazıyı** yazdığımızda, bu yazıyı **terminalde** **çıktı** olarak görürüz.

```python
print('Hello World!')
```

Program çıktısı:

    Hello World!

Metnin **tek** veya **çift tırnak** içine alınması gerektiğini **unutmayın**.

**print** ifadesi, birden çok metin satırı çıktısı almak için de kullanılabilir.

```python
print('Hello World!')
print('Hello World!')
print('Merhaba Dünya!')
print('Test')
```

Program çıktısı:

    Hello World!
    Hello World!
    Merhaba Dünya!
    Test

### İlk programınızı yazın

Ekranda **"Python öğreniyorum"** yazısını gösteren bir Python kodu yazmayı deneyin.

## Print ile hesaplama yapmak

Print ekrana sadece yazı yazmak dışında hesaplama yapıp size sonucunu da gösterebilir. Örneğin:

```python
print(2+3)
print(3*5)
```

Program çıktısı:

    5
    15

Basit hesaplamalar yanı sıra karışık formüller de kullanılabilir.

```python
print(5+(2*3)-2)
print((10/2)+5)
```

Program çıktısı:

    9
    10

## Matematiksel Operatörler

Pythonda kullanılabilecek matematiksel operatörler arasında **+** (toplama), **-** (fark), \* (çarpım), **/** (bölüm) gibi bilindik operatörler dışında

// **Tam bölme**

\*\* **Üs alma**

% **Mod alma** gibi operatörler de bulunmaktadır.

Kod örneği:

```python
print(13//2)
print(2**3)
print(7%2)
```

Program çıktısı:

    6
    8
    1

## Yorum satırları

Kodlamada yorum satırları, bir bilgisayar programının kaynak kodunda sadece programcı tarafından okunabilen açıklama satırlarıdır. Kaynak kodunu insanların anlamasını kolaylaştırmak amacıyla eklenirler ve genellikle derleyiciler ve yorumlayıcılar tarafından göz ardı edilirler.

Python'da yorum satırı oluşturmak için satırın başına # sembolü konur

Yorum satırları hiçbir şekilde ekranda gözükmez veya kodun çalışmasını etkilemez.

```python
print('Merhaba dünya')
# Bu bir açıklama satırıdır
print('Merhaba dünya2')
```

Program çıktısı:

    Merhaba dünya
    Merhaba dünya2

Görüldüğü gibi yorum satırları program çıktısında görülmemektedir.
