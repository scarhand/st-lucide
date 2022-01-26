import { newSpecPage } from '@stencil/core/testing';
import { IconPlusSquare } from '../plus-square';
import { createElement, PlusSquare }  from 'lucide';

describe('icon-plus-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlusSquare],
      html: `<icon-plus-square></icon-plus-square>`,
    });

    const svg = createElement(PlusSquare);

    expect(page.root).toEqualHtml(`
      <icon-plus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-plus-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlusSquare],
      html: `<icon-plus-square stroke="blue"></icon-plus-square>`,
    });

    const svg = createElement(PlusSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-plus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-plus-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlusSquare],
      html: `<icon-plus-square stroke-width="2"></icon-plus-square>`,
    });

    const svg = createElement(PlusSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-plus-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-plus-square>
    `);
  });
});
