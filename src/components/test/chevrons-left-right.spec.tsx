import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsLeftRight } from '../chevrons-left-right';
import { createElement, ChevronsLeftRight }  from 'lucide';

describe('icon-chevrons-left-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeftRight],
      html: `<icon-chevrons-left-right></icon-chevrons-left-right>`,
    });

    const svg = createElement(ChevronsLeftRight);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-left-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeftRight],
      html: `<icon-chevrons-left-right stroke="blue"></icon-chevrons-left-right>`,
    });

    const svg = createElement(ChevronsLeftRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-left-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsLeftRight],
      html: `<icon-chevrons-left-right stroke-width="2"></icon-chevrons-left-right>`,
    });

    const svg = createElement(ChevronsLeftRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-left-right>
    `);
  });
});
