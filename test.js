const PersianToSlug = require("./index");
const input = "عنوان Article، به زبان فارسی";

test(`PersianToSlug("${input}")\n\t"title-article-language-farsi"`, () => {
  expect(PersianToSlug(input)).toBe("title-article-language-farsi");
});

test(`PersianToSlug("${input}", 2)\n\t"title-article"`, () => {
  expect(PersianToSlug(input, 2)).toBe("title-article");
});

test(`PersianToSlug("${input}", 3, "_")\n\t"title_article_language"`, () => {
  expect(PersianToSlug(input, 3, "_")).toBe("title_article_language");
});

test(`PersianToSlug("${input}", 6, "___", { "زبان": "zaban" })\n\t"title___article___zaban___farsi"`, () => {
  expect(PersianToSlug(input, 6, "___", { "زبان": "zaban" })).toBe(
    "title___article___zaban___farsi"
  );
});
