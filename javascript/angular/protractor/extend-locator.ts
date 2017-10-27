import { by } from 'protractor';

/**
 * @see http://www.protractortest.org/#/api?view=ProtractorBy.prototype.addLocator
 */
by.addLocator('fuiInputLabel', function(label: string, parent: any): HTMLElement[] {
  const using = parent || document;
  const inputs = using.querySelectorAll('fui-input');

  return Array.prototype.filter.call(inputs, input => {
    const labelElem = input.querySelector('label .label-text');
    if (!labelElem) {
      return false;
    }
    return labelElem.innerText.trim() === label;
  }).map(input => input.querySelector('input'));
});
