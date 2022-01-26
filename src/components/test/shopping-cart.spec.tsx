import { newSpecPage } from '@stencil/core/testing';
import { IconShoppingCart } from '../shopping-cart';
import { createElement, ShoppingCart }  from 'lucide';

describe('icon-shopping-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShoppingCart],
      html: `<icon-shopping-cart></icon-shopping-cart>`,
    });

    const svg = createElement(ShoppingCart);

    expect(page.root).toEqualHtml(`
      <icon-shopping-cart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shopping-cart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShoppingCart],
      html: `<icon-shopping-cart stroke="blue"></icon-shopping-cart>`,
    });

    const svg = createElement(ShoppingCart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shopping-cart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shopping-cart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShoppingCart],
      html: `<icon-shopping-cart stroke-width="2"></icon-shopping-cart>`,
    });

    const svg = createElement(ShoppingCart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shopping-cart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shopping-cart>
    `);
  });
});
