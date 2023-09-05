# Добро пожаловать в сеть поминальных залов

Это виджет для встраивания на сайт

## Документация

1 [Демонстрация виджета](https://itnapominki.github.io/book/)

2 Интеграция виджета 

2.1 Вставить в footer
```html
<!--Скрипт формы книга start -->
<script>
      var iframe = document.getElementById("book-iframe");
      iframe.src = "https://itnapominki.github.io/book/";
      iframe.width = "100%";
      iframe.height = "610";
    </script>
<!--Скрипт формы книга end -->
```

2.2 Вставить в нужную часть сайта
```html
 <iframe id="book-iframe" frameborder="0" src=""></iframe>
```