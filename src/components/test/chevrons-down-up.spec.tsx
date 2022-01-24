import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsDownUp } from '../chevrons-down-up';
import { createElement, ChevronsDownUp }  from 'lucide';

describe('icon-chevrons-down-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDownUp],
      html: `<icon-chevrons-down-up></icon-chevrons-down-up>`,
    });

    const svg = createElement(ChevronsDownUp);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-down-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDownUp],
      html: `<icon-chevrons-down-up stroke="blue"></icon-chevrons-down-up>`,
    });

    const svg = createElement(ChevronsDownUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-down-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDownUp],
      html: `<icon-chevrons-down-up stroke-width="2"></icon-chevrons-down-up>`,
    });

    const svg = createElement(ChevronsDownUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-down-up>
    `);
  });
});
