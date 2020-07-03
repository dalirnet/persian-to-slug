# persian-to-slug

Slugifies persian (simple and clean)


## Use

-   CDN
```html
<script src="https://unpkg.com/persian-to-slug@latest/dist/persian-to-slug.js"></script>
```

-   Npm
```javascript
const PersianToSlug = require("persian-to-slug");

/* 
    PersianToSlug(
        input,
        part = 6,
        separator = "-",
        myWords = {}
    )
*/

PersianToSlug("عنوان Article، به زبان فارسی");

/* => "title-article-language-farsi" */
```

## Test

```bash
√ PersianToSlug(
    "عنوان Article، به زبان فارسی"
    )

    => "title-article-language-farsi" (8 ms)


√ PersianToSlug(
    "عنوان Article، به زبان فارسی",
    2
    )

    => "title-article" (1 ms)


√ PersianToSlug(
    "عنوان Article، به زبان فارسی",
    3,
    "_"
    )

    => "title_article_language" (1 ms)


√ PersianToSlug(
    "عنوان Article، به زبان فارسی",
    6,
    "___",
    { "زبان": "zaban" }
    )

    => "title___article___zaban___farsi" (1 ms)
```
