const PersianSlug = require("./index");
const input = "عنوان Article، به زبان فارسی";

test(`PersianSlug("${input}")\n\t"title-article-language-farsi"`, () => {
  expect(PersianSlug(input)).toBe("title-article-language-farsi");
});

test(`PersianSlug("${input}", 2)\n\t"title-article"`, () => {
  expect(PersianSlug(input, 2)).toBe("title-article");
});

test(`PersianSlug("${input}", 3, "_")\n\t"title_article_language"`, () => {
  expect(PersianSlug(input, 3, "_")).toBe("title_article_language");
});

test(`PersianSlug("${input}", 6, "___", { "زبان": "zaban" })\n\t"title___article___zaban___farsi"`, () => {
  expect(PersianSlug(input, 6, "___", { "زبان": "zaban" })).toBe(
    "title___article___zaban___farsi"
  );
});
