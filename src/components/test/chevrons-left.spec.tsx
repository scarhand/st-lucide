import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsLeft } from '../chevrons-left';
import { createElement, ChevronsLeft }  from 'lucide';

describe('icon-chevrons-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeft],
      html: `<icon-chevrons-left></icon-chevrons-left>`,
    });

    const svg = createElement(ChevronsLeft);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeft],
      html: `<icon-chevrons-left stroke="blue"></icon-chevrons-left>`,
    });

    const svg = createElement(ChevronsLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeft],
      html: `<icon-chevrons-left stroke-width="2"></icon-chevrons-left>`,
    });

    const svg = createElement(ChevronsLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-left>
    `);
  });
});
