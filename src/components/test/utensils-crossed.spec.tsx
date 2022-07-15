import { newSpecPage } from '@stencil/core/testing';
import { IconUtensilsCrossed } from '../utensils-crossed';
import { createElement, UtensilsCrossed }  from 'lucide';

describe('icon-utensils-crossed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUtensilsCrossed],
      html: `<icon-utensils-crossed></icon-utensils-crossed>`,
    });

    const svg = createElement(UtensilsCrossed);

    expect(page.root).toEqualHtml(`
      <icon-utensils-crossed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-utensils-crossed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUtensilsCrossed],
      html: `<icon-utensils-crossed stroke="blue"></icon-utensils-crossed>`,
    });

    const svg = createElement(UtensilsCrossed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-utensils-crossed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-utensils-crossed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUtensilsCrossed],
      html: `<icon-utensils-crossed stroke-width="2"></icon-utensils-crossed>`,
    });

    const svg = createElement(UtensilsCrossed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-utensils-crossed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-utensils-crossed>
    `);
  });
});
