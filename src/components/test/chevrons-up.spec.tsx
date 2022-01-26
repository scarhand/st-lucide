import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsUp } from '../chevrons-up';
import { createElement, ChevronsUp }  from 'lucide';

describe('icon-chevrons-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUp],
      html: `<icon-chevrons-up></icon-chevrons-up>`,
    });

    const svg = createElement(ChevronsUp);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUp],
      html: `<icon-chevrons-up stroke="blue"></icon-chevrons-up>`,
    });

    const svg = createElement(ChevronsUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUp],
      html: `<icon-chevrons-up stroke-width="2"></icon-chevrons-up>`,
    });

    const svg = createElement(ChevronsUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-up>
    `);
  });
});
