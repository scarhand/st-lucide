import { newSpecPage } from '@stencil/core/testing';
import { IconPalette } from '../palette';
import { createElement, Palette }  from 'lucide';

describe('icon-palette', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPalette],
      html: `<icon-palette></icon-palette>`,
    });

    const svg = createElement(Palette);

    expect(page.root).toEqualHtml(`
      <icon-palette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-palette>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPalette],
      html: `<icon-palette stroke="blue"></icon-palette>`,
    });

    const svg = createElement(Palette);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-palette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-palette>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPalette],
      html: `<icon-palette stroke-width="2"></icon-palette>`,
    });

    const svg = createElement(Palette);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-palette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-palette>
    `);
  });
});
