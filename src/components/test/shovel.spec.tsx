import { newSpecPage } from '@stencil/core/testing';
import { IconShovel } from '../shovel';
import { createElement, Shovel }  from 'lucide';

describe('icon-shovel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShovel],
      html: `<icon-shovel></icon-shovel>`,
    });

    const svg = createElement(Shovel);

    expect(page.root).toEqualHtml(`
      <icon-shovel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shovel>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShovel],
      html: `<icon-shovel stroke="blue"></icon-shovel>`,
    });

    const svg = createElement(Shovel);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shovel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shovel>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShovel],
      html: `<icon-shovel stroke-width="2"></icon-shovel>`,
    });

    const svg = createElement(Shovel);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shovel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shovel>
    `);
  });
});
