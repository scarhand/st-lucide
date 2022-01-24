import { newSpecPage } from '@stencil/core/testing';
import { IconTable } from '../table';
import { createElement, Table }  from 'lucide';

describe('icon-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTable],
      html: `<icon-table></icon-table>`,
    });

    const svg = createElement(Table);

    expect(page.root).toEqualHtml(`
      <icon-table class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-table>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTable],
      html: `<icon-table stroke="blue"></icon-table>`,
    });

    const svg = createElement(Table);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-table class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-table>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTable],
      html: `<icon-table stroke-width="2"></icon-table>`,
    });

    const svg = createElement(Table);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-table class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-table>
    `);
  });
});
