## Pseudo-class
* `:active` - активна силка(якщо нажати на силку).
* `:hover` - курсор мишки в межах елемента але нажаття не відбувається(якщо навести на силку).
* `:visited` - відвідана силка.
* `:link` - невідвідан силка.
* `focus` - застосовується до елемента якщо на нього наведено фокус(наприклад фокус на поле вводу форми ,значить можна писати текст).
* `::first-letter` - визначає стиль першого елемента;до нього можуть застосовуватися тільки стильові елементи: властивості шрифта,відступа,меж,кольору,фона;

  `элемент::first-letter { ... }`
* `::first-line` - задає стилі першого рядка текста;допустимі зміни: шрифт,колір,текст,фон.

  `элемент::first-line { ... }`

## Pseudoelement
* `::before` - додавання контента перед   елементом;

  `элемент::before { content: "текст" }`

* `::after` - додавання після елемента; 

  `елемент::after { content:"text"}`
