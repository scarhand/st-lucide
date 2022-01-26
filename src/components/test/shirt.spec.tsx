import { newSpecPage } from '@stencil/core/testing';
import { IconShirt } from '../shirt';
import { createElement, Shirt }  from 'lucide';

describe('icon-shirt', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShirt],
      html: `<icon-shirt></icon-shirt>`,
    });

    const svg = createElement(Shirt);

    expect(page.root).toEqualHtml(`
      <icon-shirt class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shirt>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShirt],
      html: `<icon-shirt stroke="blue"></icon-shirt>`,
    });

    const svg = createElement(Shirt);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shirt class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shirt>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShirt],
      html: `<icon-shirt stroke-width="2"></icon-shirt>`,
    });

    const svg = createElement(Shirt);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shirt class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shirt>
    `);
  });
});
