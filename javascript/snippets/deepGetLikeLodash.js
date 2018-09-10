/**
 * Récupérer la valeur d'un sous object/array imbriqué (équivalent au .get() de lodash)
 *
 * @param obj {object}
 * @param path {string} => "super.profond[0].coucou"
 * @param backupObj {object} => backup object value
 *
 * @returns {*} the value
 *
 * @exemple :
 *  - pour un object `{monObjet: {super: {profond: ['coucou']}}}`
 *  - pour récupérer sa valeur", au lien de checker "monObjet", puis "super", puis "profond", puis sa longeur,
 *    je fais :
 *      if (deepGet(monObjet, 'super.profond[0]') { ... }
 */
const deepGet = (obj, path, backupObj = {}) => {
  const fullPath = path
    .replace(/\[/g, '.')
    .replace(/]/g, '')
    .split('.')
    .filter(Boolean);

  return fullPath.every(everyFunc) ? obj : backupObj;

  function everyFunc(step) {
    return !(step && (obj = obj[step]) === undefined || obj === null);
  }
}
