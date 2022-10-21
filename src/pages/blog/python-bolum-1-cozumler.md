---
layout: ../../layouts/Post.astro
title: Bölüm 1 Sonu Örnek Çözümler
description:
locale: EN
tags:
  - python
date: 2022-10-19T13:10:23.402Z
hidden: True
---

## 1

#### Kullanıcıdan bir dairenin yarıçapını alan ve alanını hesaplayan bir Python programı yazınız.

Çözüm:

```python
yaricap = float(input('Yarıçapı giriniz: '))

alan = (yaricap**2) * 3.14

print('Dairenin alanı: ' + str(alan))
```

## 2

#### Kullanıcının adını ve soyadını alan ve aralarında boşluk ve tire bırakarak ekrana yazdıran bir Python programı yazın.

Çözüm:

```python
isim = input('Isminizi giriniz: ')
soyisim = input('Soyisminizi giriniz: ')

print(isim + ' - ' + soyisim)
```

## 3

#### Aşağıdaki listeden ilk ve son renkleri gösterecek bir Python programı yazınız.

Çözüm:

```python
liste = ["Kırmızı","Yeşil","Beyaz" ,"Siyah"]
print(liste[0])
print(liste[3])
```

## 4

#### Sınav programını görüntülemek için bir Python programı yazın. (tarihi sinav_liste'den çıkarın).

Çözüm:

```python
sinav_liste = [19,12,2022]
print('Sınavın tarihi: ' + str(sinav_liste[0]) + '/' + str(sinav_liste[1]) + '/' + str(sinav_liste[2]))
```

## 5

#### Kullanıcının adını ve yaşını soran ve yaşı 18 in altında ise ekrana kullanıcının ismini ve yaşının 2 katını gösteren bir program yazınız.

Çözüm:

```python
isim = input('Isminizi giriniz: ')
yas = input('Yaşınızı giriniz: ')


if int(yas) < 18:
    print(isim + '-' + str(yas))
```

## 6

#### Kullanıcıya bir soru sorup, cevaplarını şıklar halinde gösteren bir program yazın. Kullanıcını doğru şıkkı seçmesi veya yanlış şıkkı seçmesi sonucunda gösterilecek olan yazı farklı olsun.

Çözüm:

```python
print("Cumhuriyet ne zaman kuruldu?)
print('A) 29 Ekim 1923')
print('B) 3 Kasım 1922')
print('C) 14 Nisan 1918')
print('D) 2 Ağustos 1920')

cevap = input("Cevabinizi giriniz: ")

if cevap == 'A' or cevap == 'a':
    print("Dogru cevabi girdiniz. Tebrikler!")
elif cevap == 'B' or cevap =='b' or cevap =='C' or cevap =='c' or cevap =='D' or cevap == 'd':
    print("Yanlis cevap tekrar deneyiniz.")
else:
    print("Eksik yada hatali bir tuslama girdiniz. Tekrar deneyiniz.")
```
