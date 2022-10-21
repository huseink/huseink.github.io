---
layout: ../../layouts/Post.astro
title: Değişkenler ve Veri tipleri
description: Int, float, double, string, boolean v.b
locale: EN
tags:
  - python
date: 2022-09-01T13:10:23.402Z
hidden: True
---

## Değişkenler

Değişkenler, değerleri **depolamak** için ayrılmış bellek konumlarıdır. Bu, bir değişken oluşturduğunuzda **bellekte** biraz **yer** **ayırdığınız** anlamına gelir.

Bir değişkenin **veri** **tipine** bağlı olarak yorumlayıcı hafızayı ayırır ve ayrılmış hafızada **nelerin** **saklanabileceğine** karar verir. Bu nedenle değişkenlere **farklı** veri **tipleri** atayarak bu değişkenlerde **tamsayı**, **ondalık** veya **karakter** saklayabilirsiniz.

### Değişken tanımlama ve değer atama

Python'da bir değişken **tanımlamak** için değişkeninize bir **isim** vermeniz ve **"="** kullanarak ona bir **değer** **vermeniz** gerekir.

En basit örneği matematikten de bildiğimiz ve sık sık kullandığımız **"x"** değişkeni olabilir.

```python
x = 2
y = 5
z = 7
```

Kod örneğindeki gibi bir tanımlama ve atama yapıldığı takdirde artık bilgisayar belleğinde x, y, z değişkenleri yer almış olur. Bu değişkenler daha sonra kullanılabilir veya yeniden atama yapılabilir.

Örneğin:

```python
print(x)
print(y)
```

Program çıktısı:

```
2
5
```

### Aynı anda birden fazla değişken tanımlaması ve değer ataması

```python
a = b = c = 1
```

Bu kod satırı çalıştığında a, b, c diye üç tane değişken oluşturulmuş olur ve üç değişkenin de değeri 1 olur.

Tek satırda farklı değere sahip değişkenler oluşturmak için değişkenler ve değerler virgül ile ayrılır:

```python
a,b,c = 1,2,5
```

Bu kod satırı çalıştığında ise yine a b c olmak üzere üç değişken oluşturulur. Fakat bu sefer
a nın değeri 1, b nin değeri 2, c nin değeri de 5 tir

## Veri Tipleri

Bellekte saklanan **veriler** birçok **türde** olabilir. Örneğin, bir kişinin **yaşı** **sayısal** bir değer olarak kaydedilir ve **adresi** **karakterler** olarak saklanır. Python, üzerlerinde yapılabilecek **işlemleri** ve her biri için **depolama** **yöntemini** tanımlamak için kullanılan çeşitli **standart** **veri** **türlerine** sahiptir.

Python'un veri tipleri:

- **Sayılar** (int, float, double)
- **String**
- **List**
- **Tuple**
- **Set**
- **Dictionary**

### Sayı veri tipleri

Sayı veri türleri sayısal değerleri saklar. Örneğin -

```python
a = 1
b = 10
```

Python **dört** farklı **sayısal** **türü** destekler -

- **int** (işaretli tam sayılar)
- **long** (uzun tamsayılar, sekizli ve onaltılı olarak da
  gösterilebilirler)
- **float** (kayan nokta gerçek değerleri)
- **complex** (karmaşık sayılar)

![Sayı tipleri](https://i.ibb.co/FHN25VB/bAZ00KB.png)
_Sayı tipi örnekleri_

### String veri tipi

Python'daki **dizeler** (string), **tırnak** işaretleri içinde gösterilen bitişik bir **karakter** **kümesi** olarak tanımlanır. Python, **tek** veya **çift** **tırnak** çiftlerine izin verir.

Artı (+) işareti dize birleştirme operatörüdür ve yıldız işareti (\*) tekrarlama operatörüdür.

```python
str =  'Hello World!'

print(str) # Ekranda yazının tamamını gösterir
print(str[0])  # Ekranda yazının ilk karakterini gösterir
print(str[2:5])  # Ekranda yazının 3nci karakterinden 5ncü karakterine kadar olan kısmı gösterir
print(str *  2)  # Aynı kelimeyi 2 defa gösterir
print(str +  "TEST")  # Kelimenin yanına "TEST" ekleyerek  gösterir
```

Program çıktısı:

    Hello World!
    H
    llo
    Hello World!Hello World!
    Hello World!Test

### List veri tipi

**Listeler**, Python'un **bileşik** **veri** **türlerinin** en çok yönlü olanlarıdır. Bir liste, **virgülle** **ayrılmış** ve **köşeli parantez** ([]) içine alınmış **öğeler** içerir.

Listeler bir dereceye kadar C'deki dizilere benzer. Aralarındaki bir fark, bir listeye ait tüm öğelerin **farklı** **veri** **türünde** olabilmesidir.

```python
list =  ['Hüsein', 'abcd', 2.23, 5, 72 ]
```

Listeyi ekranda gösterme:

```python
print(list) # Tüm listeyi gösterir
print(list[0])  # Listenin ilk öğesini gösterir
print(list[1:3])  # Listenin 2nci öğesinden 3nü öğesine kadarkileri ekrana gösterir
print(list[2:])  # Listenin 3ncü öğesinden başlayarak ekrana gösterir
```

Program çıktısı:

```
'Hüsein', 'abcd' , 2.23, 5, 72
Hüsein
2.23, 5
5,7
```

## Veri Türü Dönüşümü

Veri tiplerini birbirine dönüştürmek mümkündür.

Örneğin:

```python
x = 2 # Bu bir int veri tipidir (sayısal veri tipi)
print(x*3) # Ekrana 6 yazdırır çünkü sayısal olarak 2 değerini 3 ile çarpar

x = '2' # Bu bir string veri tipidir
print(x*3) # Ekrana 222 yazdırır çünkü kelime olarak 2 değerini 3 defa tekrarlar
```

Bu gibi durumlarda:

```python
x = '5' # Bu şekilde bir sayısal değeriniz var ise
print(x*3) # yazınca ekranda 555 görmemek için string tipini, int'e dönüştürebiliriz
```

String veriyi int veriye dönüştürmek için int() fonksiyonu kullanılır.
İnt veriyi string veriye dönüştürmek için de str() fonksiyonu kullanılırç

```python
x = '5'
y = int(x)
print(y*3) # Ekranda 555 yerine 15 görürüz çünkü y, x'in int halini saklar
```

Float dönüşümleri için:

```python
x = float(1)     # x'in değeri 1.0 olur
y = float(2.8)   # y'nin değeri 2.8 olur
z = float("3")   # z'nin değeri 3.0 olur
w = float("4.2") # w'nun değeri 4.2 olur
```
