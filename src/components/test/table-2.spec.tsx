import { newSpecPage } from '@stencil/core/testing';
import { IconTable2 } from '../table-2';
import { createElement, Table2 }  from 'lucide';

describe('icon-table-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTable2],
      html: `<icon-table-2></icon-table-2>`,
    });

    const svg = createElement(Table2);

    expect(page.root).toEqualHtml(`
      <icon-table-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-table-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTable2],
      html: `<icon-table-2 stroke="blue"></icon-table-2>`,
    });

    const svg = createElement(Table2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-table-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-table-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTable2],
      html: `<icon-table-2 stroke-width="2"></icon-table-2>`,
    });

    const svg = createElement(Table2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-table-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-table-2>
    `);
  });
});
