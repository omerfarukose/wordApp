export const LanguageList = [
    "English",
    "Turkish",
    "German",
    "Spanish",
    "French",
    "Chinese",
    "Japanese",
    "Russian",
    "Portuguese",
    "Korean",
]

export const SortTpyeList = [
    "date-down",
    "date-up",
    "alpha-down",
    "alpha-up",
]

export const SortTpyes = [
    "sort-alpha-down",
    "sort-alpha-down-alt",
    "sort-numeric-down",
    "sort-numeric-down-alt"
]

export const SampleWordList = [
    "emotion",
    "cultural",
    "historical",
    "value",
    "vision",
    "thought",
    "principle",
    "purpose",
    "reason",
    "situation",
    "independent",
    "specific",
    "important",
]

export const sampleData = {
    word: "car",
    equivalent: "araba",
    language: "en",
    missValue: 2,
}

export const languages = {
    en: "en",
    tr: "tr",
    fr: "fr",
}

export const sampleWordData = {
    word: "sample",
    equivalent: "örnek",
    extraData: "This is a sample of my word !",
    language: languages.en,
    correctCount: 3,
    wrongCount: 2
}

export const WordListByLanguage = {
    en: [
        {
            word: "purpose",
            equivalent: "amaç",
            language: languages.en,
            missValue: 2,
        },
        {
            word: "vision",
            equivalent: "vizyon",
            language: languages.en,
            missValue: 3,
        },
        {
            word: "reason",
            equivalent: "sebep",
            language: languages.en,
            missValue: 1,
        },
        {
            word: "thought",
            equivalent: "düşünce",
            language: languages.en,
            missValue: 0,
        },
        {
            word: "car",
            equivalent: "araba",
            language: languages.en,
            missValue: 1,
        },
        {
            word: "emotion",
            equivalent: "duygu",
            language: languages.en,
            missValue: 5,
        },
        {
            word: "historical",
            equivalent: "tarihsel",
            language: languages.en,
            missValue: 4,
        },
        {
            word: "value",
            equivalent: "değer",
            language: languages.en,
            missValue: 2,
        },
        {
            word: "important",
            equivalent: "önemli",
            language: languages.en,
            missValue: 3,
        },
    ],
    fr: [
        {
            word: "créatif",
            equivalent: "yaratıcı",
            language: languages.fr,
            missValue: 2,
        },
        {
            word: "imagination",
            equivalent: "hayal gücü",
            language: languages.fr,
            missValue: 3,
        },
        {
            word: "logique",
            equivalent: "mantık",
            language: languages.fr,
            missValue: 1,
        },
        {
            word: "esprit",
            equivalent: "zihin",
            language: languages.fr,
            missValue: 0,
        },
        {
            word: "véhicule",
            equivalent: "araç",
            language: languages.fr,
            missValue: 1,
        },
        {
            word: "sentiment",
            equivalent: "duygu",
            language: languages.fr,
            missValue: 5,
        },
        {
            word: "culturel",
            equivalent: "kültürel",
            language: languages.fr,
            missValue: 4,
        },
        {
            word: "principe",
            equivalent: "ilke",
            language: languages.fr,
            missValue: 2,
        },
        {
            word: "significatif",
            equivalent: "anlamlı",
            language: languages.fr,
            missValue: 3,
        },
    ]
}