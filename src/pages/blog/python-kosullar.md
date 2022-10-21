---
layout: ../../layouts/Post.astro
title: Koşul İfadeleri
description: İf, elif, else
locale: EN
tags:
  - python
date: 2022-09-01T13:10:23.402Z
hidden: True
---

## Mantıksal operatörler

Python, matematikteki **mantıksal** **operatörleri** destekler:

**Eşittir**: a == b

**Eşit** **değildir**: a != b

**Küçüktür**: a < b

**Küçük** **eşit**: a <= b

**Büyüktür**: a > b

**Büyük** **eşit**: a >= b

## Koşullar

Koşullar programın **akışını** **değiştiren** ifadelerdir. Ekranda bir ifadenin gözükmesi veya farklı bir işlemin yapılması bir koşula bağlı olması gerekirse **koşul ifadeleri** kullanılır.

Örneğin:

    a = 33
    b = 200
    if b > a:
        print("b a'dan büyüktür")

Program çıktısı:

    b a'dan büyüktür

İstenilen koşul oluşmazsa ordaki kod parçası çalışmamaktadir

Örneğin:

    a = 255
    b = 200
    if b > a:
        print("b a'dan büyüktür")

Program çıktısı:

    (BOŞ)

Ekranda birşey görmememizin nedeni b'nin a dan büyük olmamasıdır.

Birden fazla koşulun kontrol edilmesi gerekirse de elif ve else ifadeleri kullanılır.

Örneğin:

    a = 255
    b = 200
    if b > a:
        print("b a'dan büyüktür")
    elif b < a:
        print("a b'den büyüktür")

Program çıktısı:

    a b'den büyüktür

## Girinti

Python, koddaki **kapsamı** tanımlamak için **girintiye** (**satırın başındaki boşluk**) dayanır. Diğer programlama dilleri genellikle bu amaç için **süslü parantez** kullanır.

    a = 33
    b = 200
    if b > a:
    print("b a'dan büyüktür") # Bu kullanım satır başı girinti olmadığı için hata üretir

## elif

elif anahtar kelimesi Pythonda **"önceki koşullar doğru değilse bu koşulu dene"** demenin yoludur.

    a = 33
    b = 33
    if b > a:
        print("b a'dan büyüktür")
    elif a == b:
        print("a ve b eşittir")

Program çıktısı:

    a ve b eşittir

## else

else anahtar sözcüğü, **önceki koşullar** tarafından **yakalanmayan** her şeyi **yakalar**.

    a = 200
    b = 33
    if b > a:
        print("b a'dan büyüktür")
    elif a == b:
        print("a ve b eşittir")
    else:
        print("a b'den büyüktür")

Program çıktısı:

    a b'den büyüktür

## And Or

**"and"** ve **"or"** anahtar sözcükleri birer mantıksal operatördür ve koşullu ifadeleri birleştirmek için kullanılırlar:

    a = 200
    b = 33
    c = 500
    if a > b and c > a:
        print("İki koşul da doğrudur")

Program çıktısı:

    İki koşul da doğrudur

**"or"** örneği:

    a = 200
    b = 33
    c = 500
    if a > b or a > c:
      print("İki koşuldan biri doğrudur")

## İç içe if

İf koşul ifadeleri içinde yine if koşul ifadeleri olabilir.

Örneğin:

    x = 41

    if x > 10:
      print("X 10 dan büyüktür")
      if x > 20:
        print("ve 20'den büyüktür")
      else:
        print("20'den büyük değildir")

Program çıktısı:

    X 10 dan büyüktür
    ve 20'den büyüktür
