import { newSpecPage } from '@stencil/core/testing';
import { IconFileSpreadsheet } from '../file-spreadsheet';
import { createElement, FileSpreadsheet }  from 'lucide';

describe('icon-file-spreadsheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileSpreadsheet],
      html: `<icon-file-spreadsheet></icon-file-spreadsheet>`,
    });

    const svg = createElement(FileSpreadsheet);

    expect(page.root).toEqualHtml(`
      <icon-file-spreadsheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-spreadsheet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSpreadsheet],
      html: `<icon-file-spreadsheet stroke="blue"></icon-file-spreadsheet>`,
    });

    const svg = createElement(FileSpreadsheet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-spreadsheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-spreadsheet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSpreadsheet],
      html: `<icon-file-spreadsheet stroke-width="2"></icon-file-spreadsheet>`,
    });

    const svg = createElement(FileSpreadsheet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-spreadsheet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-spreadsheet>
    `);
  });
});
