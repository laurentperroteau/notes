const units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

function num2Letters(number) {
    const _sign = (number < 0) ? 'Moins ' : '';
    let unitsOut = '';
    let tensOut = '';
    let hundredsOut = '';
    let result = '';

    number = Math.abs(number);

    if (isNaN(number) || number < 0 || 999 < number) {
        return;
    }

    const units = number % 10;
    const tens = (number % 100 - units) / 10;
    const hundreds = (number % 1000 - number % 100) / 100;

    if (number === 0) {
        result = 'zéro';
    } else {
        // Traitement des unités
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et ' : '') + units2Letters[units];

        // Traitement des dizaines
        if (tens === 1 && units > 0) {
            tensOut = units2Letters[10 + units];
            unitsOut = '';
        } 
        else if (tens === 7 || tens === 9) {
            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et ' : '') + units2Letters[10 + units];
            unitsOut = '';
        } 
        else {
            tensOut = tens2Letters[tens];
        }
        tensOut += (units === 0 && tens === 8 ? 's' : '');

        // Traitement des centaines
        hundredsOut += hundreds > 1 ? units2Letters[hundreds] + ' ' : ''; // unité de la centaine sauf si un
        hundredsOut += (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens === 0 && units === 0 ? 's' : '');

        result += _sign; // "moins"
        result += _sign ? ' ' : ''; // espace si signe
        result += hundredsOut + ' ' + tensOut;
        result += tensOut && unitsOut && unitsOut.indexOf('et') === -1  ? '-' : ' '; // ajout tiret si nombre inférieur à cent sauf si "et
        result += unitsOut;
    }

    return result;
}
