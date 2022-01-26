import { newSpecPage } from '@stencil/core/testing';
import { IconShoppingBag } from '../shopping-bag';
import { createElement, ShoppingBag }  from 'lucide';

describe('icon-shopping-bag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShoppingBag],
      html: `<icon-shopping-bag></icon-shopping-bag>`,
    });

    const svg = createElement(ShoppingBag);

    expect(page.root).toEqualHtml(`
      <icon-shopping-bag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shopping-bag>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShoppingBag],
      html: `<icon-shopping-bag stroke="blue"></icon-shopping-bag>`,
    });

    const svg = createElement(ShoppingBag);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shopping-bag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shopping-bag>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShoppingBag],
      html: `<icon-shopping-bag stroke-width="2"></icon-shopping-bag>`,
    });

    const svg = createElement(ShoppingBag);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shopping-bag class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shopping-bag>
    `);
  });
});
