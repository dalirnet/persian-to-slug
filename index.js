const words = require("./words.json");
const letters = require("./letters.json");

module.exports = (input, part = 6, separator = "-", myWords = {}) => {
  let allWords = { ...words, ...myWords };
  let keep = {
    en: [],
    fa: [],
  };

  input
    .toLowerCase()
    .replace(/[\-\_\,\.\،\؛\:\;\'\"\`\(\)\[\]\{\}\!\?\؟]/g, " ")
    .replace(/[a-z]+/g, " $& ")
    .replace(/\s\s+/g, " ")
    .replace(/\s/g, "-")
    .replace(
      new RegExp(`[^\-a-z0-9${Object.keys(letters).join("")}\s\S]`, "g"),
      ""
    )
    .split("-")
    .map(value => value.replace(/[٠-٩]/g, ch => "٠١٢٣٤٥٦٧٨٩".indexOf(ch)))
    .filter((value) => {
      if (!isNaN(value))
        return true;
      return value.length > 2;
    })
    .forEach((value, key) => {
      keep[value.match(new RegExp("[a-z]")) ? "en" : "fa"].push({ key, value });
    });

  keep.fa.forEach((item, key) => {
    if (item.value in allWords) {
      keep.fa[key].value = allWords[item.value];
    } else {
      Object.entries(letters).forEach(([fa, en]) => {
        keep.fa[key].value = keep.fa[key].value.replace(
          new RegExp(`(${fa})`, "g"),
          en
        );
      });
    }
  });

  return [...keep.en, ...keep.fa]
    .sort((a, b) => a.key - b.key)
    .map((item) => item.value)
    .slice(0, part)
    .join(separator);
};
