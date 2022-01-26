import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsRight } from '../chevrons-right';
import { createElement, ChevronsRight }  from 'lucide';

describe('icon-chevrons-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRight],
      html: `<icon-chevrons-right></icon-chevrons-right>`,
    });

    const svg = createElement(ChevronsRight);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRight],
      html: `<icon-chevrons-right stroke="blue"></icon-chevrons-right>`,
    });

    const svg = createElement(ChevronsRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRight],
      html: `<icon-chevrons-right stroke-width="2"></icon-chevrons-right>`,
    });

    const svg = createElement(ChevronsRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-right>
    `);
  });
});
