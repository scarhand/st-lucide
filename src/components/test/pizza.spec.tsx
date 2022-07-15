import { newSpecPage } from '@stencil/core/testing';
import { IconPizza } from '../pizza';
import { createElement, Pizza }  from 'lucide';

describe('icon-pizza', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPizza],
      html: `<icon-pizza></icon-pizza>`,
    });

    const svg = createElement(Pizza);

    expect(page.root).toEqualHtml(`
      <icon-pizza class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pizza>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPizza],
      html: `<icon-pizza stroke="blue"></icon-pizza>`,
    });

    const svg = createElement(Pizza);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pizza class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pizza>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPizza],
      html: `<icon-pizza stroke-width="2"></icon-pizza>`,
    });

    const svg = createElement(Pizza);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pizza class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pizza>
    `);
  });
});
