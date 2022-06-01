import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsRightLeft } from '../chevrons-right-left';
import { createElement, ChevronsRightLeft }  from 'lucide';

describe('icon-chevrons-right-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRightLeft],
      html: `<icon-chevrons-right-left></icon-chevrons-right-left>`,
    });

    const svg = createElement(ChevronsRightLeft);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-right-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRightLeft],
      html: `<icon-chevrons-right-left stroke="blue"></icon-chevrons-right-left>`,
    });

    const svg = createElement(ChevronsRightLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-right-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsRightLeft],
      html: `<icon-chevrons-right-left stroke-width="2"></icon-chevrons-right-left>`,
    });

    const svg = createElement(ChevronsRightLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-right-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-right-left>
    `);
  });
});
