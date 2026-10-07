let number_1 = 43
let number_2 = 44
let number_3 = 44
let number_4 = 2

let isSorting  = true
let backup_num = 0

console.log(`Başlangıçta sayılar: `, number_1, number_2, number_3, number_4)

while (isSorting ) {
    if (number_1 <= number_2 && number_2 <= number_3 && number_3 <= number_4) {
        isSorting  = false
    }
    if (number_1 > number_2) {
        backup_num = number_1
        number_1 = number_2
        number_2 = backup_num
        console.log(`1. ve 2. sayi değişti: `, number_1, number_2, number_3, number_4)
    }
    if (number_2 > number_3) {
        backup_num = number_2
        number_2 = number_3
        number_3 = backup_num
        console.log(`2. ve 3. sayi değişti: `, number_1, number_2, number_3, number_4)
    }
    if (number_3 > number_4)  {
        backup_num = number_3
        number_3 = number_4
        number_4 = backup_num
        console.log(`3. ve 4. sayi değişti: `, number_1, number_2, number_3, number_4)
    }
}

console.log(`Algoritma tamamlandı: `, number_1, number_2, number_3, number_4)