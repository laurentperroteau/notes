/**
 * Loop
 */
let suite = `
  <table class="center">
    ${this.dataset.suite.map(suite => `
      <td>
        <table class="col">
          ${suite.map(suiteID => `
            <tr><td><img src="${this.path}${suiteID}.svg" /></td></tr>
          `).join('')}
        </table>
      </td>
    `).join('')}
`;

/**
 * Loop with function
 */
const renderCellBySuite = (suite) => {
  return `     
    <td>
      <table class="col">
        ${suite.map(suiteID => `
          <tr><td><img src="${this.path}${suiteID}.svg" /></td></tr>
        `).join('')}
      </table>
    </td>
  `;
};

/**
 * With condition
 */
let subcase  = `
  ${isInConflict() ? `
    <div class="subcase c${i}-${j}-diag conflict"></div>` : ''
  }
  <div class="subcase c${i}-${j} ${isInConflict() ? `conflict` : ``}"></div>
`;
