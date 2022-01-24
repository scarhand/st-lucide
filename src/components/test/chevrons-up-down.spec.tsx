import { newSpecPage } from '@stencil/core/testing';
import { IconChevronsUpDown } from '../chevrons-up-down';
import { createElement, ChevronsUpDown }  from 'lucide';

describe('icon-chevrons-up-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUpDown],
      html: `<icon-chevrons-up-down></icon-chevrons-up-down>`,
    });

    const svg = createElement(ChevronsUpDown);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevrons-up-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUpDown],
      html: `<icon-chevrons-up-down stroke="blue"></icon-chevrons-up-down>`,
    });

    const svg = createElement(ChevronsUpDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevrons-up-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronsUpDown],
      html: `<icon-chevrons-up-down stroke-width="2"></icon-chevrons-up-down>`,
    });

    const svg = createElement(ChevronsUpDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevrons-up-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevrons-up-down>
    `);
  });
});
