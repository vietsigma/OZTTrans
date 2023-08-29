const suportedLang = `
Vietnamese
English
Japanese
Chinese
Korean
`.trim().split("\n");



const suportedLangZh = `
越南语
英语
日本
中国
韩国
`.trim().split("\n");

const locales = `
Vietnamese - vi
English - en
Japanese - ja
Chinese - zh-CN
Korean - ko

`.trim().split("\n").map(line => line.split(" - "));

const commonLangZh = `
越南语
英语
日本
中国
韩国
`.trim().split("\n");

const langBiMap = (() => {
    const res = new Map<string, string>();
    for (let i = 0; i < suportedLang.length; i++) {
        res.set(suportedLang[i], suportedLangZh[i]);
        res.set(suportedLangZh[i], suportedLang[i]);
    }
    return res;
})();

const langLocaleBiMap = (() => {
    const res = new Map<string, string>();
    for (const words of locales) {
        res.set(words[0], words[1]);
        res.set(words[1], words[0]);
    }
    return res;
})();

function getLocale(lang: string): string | undefined {
    let res = langLocaleBiMap.get(lang);
    if (!res) {
        const lang1 = langBiMap.get(lang);
        if (lang1) {
            res = langLocaleBiMap.get(lang1);
        }
    }
    return res;
}

export {suportedLang, suportedLangZh, commonLangZh, getLocale, langBiMap, langLocaleBiMap};
