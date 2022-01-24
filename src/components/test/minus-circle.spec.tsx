import { newSpecPage } from '@stencil/core/testing';
import { IconMinusCircle } from '../minus-circle';
import { createElement, MinusCircle }  from 'lucide';

describe('icon-minus-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMinusCircle],
      html: `<icon-minus-circle></icon-minus-circle>`,
    });

    const svg = createElement(MinusCircle);

    expect(page.root).toEqualHtml(`
      <icon-minus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-minus-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinusCircle],
      html: `<icon-minus-circle stroke="blue"></icon-minus-circle>`,
    });

    const svg = createElement(MinusCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-minus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-minus-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinusCircle],
      html: `<icon-minus-circle stroke-width="2"></icon-minus-circle>`,
    });

    const svg = createElement(MinusCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-minus-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-minus-circle>
    `);
  });
});
