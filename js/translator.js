const languageInputTxt = document.querySelector('#languageInput');
const fromLang = document.querySelector('#fromLang');
const toLang = document.querySelector('#toLang');
const convertBtn = document.querySelector('#convertBtn');
const exchangeBtn = document.querySelector('#exchangeBtn');
const resetBtn = document.querySelector('#resetBtn');
const output = document.querySelector('#languageOutput');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');

let convertLangApi = 'https://api.mymemory.translated.net/get?';
languageInputTxt.value = '';

convertBtn.addEventListener('click', () => {
    const fromLangVal = fromLang.value;
    const toLangVal = toLang.value;

    const languageInputVal = languageInputTxt.value;

    if (languageInputVal.length === 0) {
        alert('Please enter a sentence to convert');
    } else {
        const convertRequest = `${convertLangApi}q=${languageInputVal}&langpair=${fromLangVal}|${toLangVal}`;

        fetch(convertRequest)
            .then((res) => res.json())
            .then((json) => {
                const res = json;
                console.log(res.responseData.translatedText);
                output.value = res.responseData.translatedText;
                outputSection.style.display = 'block';
                container.style.height = '650px';
            });
    }
});

exchangeBtn.addEventListener('click', () => {
    const fromLangVal = fromLang.value;
    const toLangVal = toLang.value;

    fromLang.value = toLangVal;
    toLang.value = fromLangVal;
   
});

resetBtn.addEventListener('click', () => {
    languageInputTxt.value = '';
    output.value = '';
});
