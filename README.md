# persian-slug

Slugifies persian (simple and clean)


## Use

```javascript
const PersianSlug = require("persian-slug");

/* 
    PersianSlug(
        input,
        part = 6,
        separator = "-",
        myWords = {}
    )
*/

PersianSlug("عنوان Article، به زبان فارسی");

/* => "title-article-language-farsi" */
```

## Test

```bash
√ PersianSlug(
    "عنوان Article، به زبان فارسی"
    )

    => "title-article-language-farsi" (8 ms)


√ PersianSlug(
    "عنوان Article، به زبان فارسی",
    2
    )

    => "title-article" (1 ms)


√ PersianSlug(
    "عنوان Article، به زبان فارسی",
    3,
    "_"
    )

    => "title_article_language" (1 ms)


√ PersianSlug(
    "عنوان Article، به زبان فارسی",
    6,
    "___",
    { "زبان": "zaban" }
    )

    => "title___article___zaban___farsi" (1 ms)
```
