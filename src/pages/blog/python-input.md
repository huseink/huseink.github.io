---
layout: ../../layouts/Post.astro
title: Kullanıcıdan girdi almak
description: input() fonksiyonu
locale: EN
tags:
  - python
date: 2022-09-01T13:10:23.402Z
hidden: True
---

Şimdiye kadar **değişkenlere** değer **atarken** hep **statik** değerler atadık.
Bunlar **x=2**, **y=4** gibi **önceden** belirtilmiş ve **ataması** yapılmış **değerler** oldu.

Fakat bir değişkenin **değerinin** ne olacağı **her zaman** **önceden** **bilinmeyebilir**.

Örneğin, kullanıcıya ismini soran bir uygulama yazmak istiyorsanız değişken olarak
isim = 'Husein' **yazamazsınız**. Çünkü programınızı kullanacak her insan **farklı** isim girmek isteyebilir.

Bunun için Python'da **input()** fonksiyonu bulunmaktadır.

Değişkenlere değer atama sırasında **statik** bir değer **yerine**, bu **değeri** **kullanıcıdan** **almak** için kullanılır.

    isim = input('Isminizi giriniz: ')
    print('Merhaba,  ' + isim)

Program Çıktısı:

    Isminizi giriniz:

Burada Python **kullanıcıdan** **klavyeden** bir değer girmesini **bekler** ve **print** **satırına** kullanıcı **değer** **girene** kadar **geçmez**. Kullanıcının 'Hüsein' değerini girdiğini varsayarsak. Bunun **ardından** **print** ifadesi **çalıştırılacaktır**.

Kullanıcı değer girdikten sonra program çıktısı:

    Isminizi giriniz: Hüsein
    Merhaba, Hüsein

Bu çıktıyı görmemizin nedeni **isim** **değişkenine** dışardan girilmiş olan '**Hüsein**' değerinin **atanmış** olmasıdır.

Kullanıcının klavyeden girdiği her değer string ifade olarak kabul edilir. Bu yüzden:

    yas = input('Yaşınızı giriniz: ')
    print(yas*3)

gibi bir programımızın olduğunu varsayarsak.

Kullanıcı klavyeden veri girdikten sonra program çıktısı:

    Yaşınızı giriniz: 20
    202020

Ekranda 20'nin tekrarlanma sebebi, yas değişkeninin tipinin otomatik string olmasından kaynaklanır.

Bu sorunu çözmek için veri alınırken girilecek olan değer **sayısal** **değer** ise **'veri tipi dönüşümü'** yapmaktır:

    yas = int(input('Yaşınızı giriniz: '))
    print(yas*3)

Bu düzenleme yapıldıktan sonra program çıktısı:

    Yaşınızı giriniz: 20
    60
