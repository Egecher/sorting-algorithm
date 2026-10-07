# Kabarcık Sıralaması (Bubble Sort) Algoritması

Bu proje, rastgele veya belirli bir sırada verilen sayı dizisini **Kabarcık Sıralaması (Bubble Sort)** yöntemiyle küçükten büyüğe doğru sıralayan ve her yer değiştirme adımını ekrana yazdıran basit bir konsol uygulamasıdır.

## Algoritma Nasıl Çalışır?

Kabarcık sıralaması, yan yana olan iki elemanı karşılaştırarak başlar. Eğer soldaki eleman sağdakinden büyükse yerlerini değiştirir. Bu işlem, dizi tamamen sıralanana kadar tekrarlanır. Büyük elemanlar her adımda dizinin sonuna doğru "baloncuk" gibi yükseldiği için bu adı almıştır.

## Örnek Çıktı

Program çalıştırıldığında, elemanların adım adım nasıl yer değiştirdiğini gösteren konsol çıktısı şu şekildedir:

```text
Başlangıçta sayılar:  43 44 44 2
3. ve 4. sayi değişti:  43 44 2 44
2. ve 3. sayi değişti:  43 2 44 44
1. ve 2. sayi değişti:  2 43 44 44
Algoritma tamamlandı:  2 43 44 44
```

## Zaman Karmaşıklığı (Time Complexity)

* **En Kötü Durum (Worst Case):** $O(n^2)$ - Dizi tamamen ters sıralıysa.
* **En İyi Durum (Best Case):** $O(n)$ - Dizi zaten sıralıysa (erken durdurma kontrolü ile).
* **Ortalama Durum (Average Case):** $O(n^2)$

## Kurulum ve Çalıştırma

Projenizi yerel bilgisayarınızda çalıştırmak için adımları buraya ekleyebilirsiniz:

1. Bu depoyu klonlayın veya dosyaları indirin.
2. Kodunuzu uygun derleyici/yorumlayıcı Javascript ile çalıştırın.
