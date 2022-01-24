import { newSpecPage } from '@stencil/core/testing';
import { IconDivideSquare } from '../divide-square';
import { createElement, DivideSquare }  from 'lucide';

describe('icon-divide-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDivideSquare],
      html: `<icon-divide-square></icon-divide-square>`,
    });

    const svg = createElement(DivideSquare);

    expect(page.root).toEqualHtml(`
      <icon-divide-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-divide-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivideSquare],
      html: `<icon-divide-square stroke="blue"></icon-divide-square>`,
    });

    const svg = createElement(DivideSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-divide-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-divide-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivideSquare],
      html: `<icon-divide-square stroke-width="2"></icon-divide-square>`,
    });

    const svg = createElement(DivideSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-divide-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-divide-square>
    `);
  });
});
