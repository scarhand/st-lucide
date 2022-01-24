import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsDown } from '../chevrons-down';
import { createElement, ChevronsDown }  from 'lucide';

describe('icon-chevrons-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDown],
      html: `<icon-chevrons-down></icon-chevrons-down>`,
    });

    const svg = createElement(ChevronsDown);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDown],
      html: `<icon-chevrons-down stroke="blue"></icon-chevrons-down>`,
    });

    const svg = createElement(ChevronsDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsDown],
      html: `<icon-chevrons-down stroke-width="2"></icon-chevrons-down>`,
    });

    const svg = createElement(ChevronsDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-down>
    `);
  });
});
