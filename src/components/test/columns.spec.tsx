import { newSpecPage } from '@stencil/core/testing';
import { IconColumns } from '../columns';
import { createElement, Columns }  from 'lucide';

describe('icon-columns', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconColumns],
      html: `<icon-columns></icon-columns>`,
    });

    const svg = createElement(Columns);

    expect(page.root).toEqualHtml(`
      <icon-columns class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-columns>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconColumns],
      html: `<icon-columns stroke="blue"></icon-columns>`,
    });

    const svg = createElement(Columns);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-columns class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-columns>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconColumns],
      html: `<icon-columns stroke-width="2"></icon-columns>`,
    });

    const svg = createElement(Columns);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-columns class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-columns>
    `);
  });
});
