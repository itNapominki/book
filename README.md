
# Добро пожаловать в сеть поминальных залов

Это виджет для встраивания на сайт

## Документация

1 [Демонстрация виджета](https://itnapominki.github.io/book/)

2 Интеграция виджета 

```html
Вставить в footer

<!--Скрипт формы книга start -->
<script>
      var iframe = document.getElementById("book-iframe");
      iframe.src = "https://itnapominki.github.io/book/";
      iframe.width = "100%";
      iframe.height = "610";
    </script>
<!--Скрипт формы книга end -->
```


```html
Вставить в нужную часть сайта

 <iframe id="book-iframe" frameborder="0" src=""></iframe>

```