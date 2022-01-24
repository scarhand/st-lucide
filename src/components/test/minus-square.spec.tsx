import { newSpecPage } from '@stencil/core/testing';
import { IconMinusSquare } from '../minus-square';
import { createElement, MinusSquare }  from 'lucide';

describe('icon-minus-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMinusSquare],
      html: `<icon-minus-square></icon-minus-square>`,
    });

    const svg = createElement(MinusSquare);

    expect(page.root).toEqualHtml(`
      <icon-minus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-minus-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinusSquare],
      html: `<icon-minus-square stroke="blue"></icon-minus-square>`,
    });

    const svg = createElement(MinusSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-minus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-minus-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinusSquare],
      html: `<icon-minus-square stroke-width="2"></icon-minus-square>`,
    });

    const svg = createElement(MinusSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-minus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-minus-square>
    `);
  });
});
