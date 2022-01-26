import { newSpecPage } from '@stencil/core/testing';
import { IconCheckSquare } from '../check-square';
import { createElement, CheckSquare }  from 'lucide';

describe('icon-check-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCheckSquare],
      html: `<icon-check-square></icon-check-square>`,
    });

    const svg = createElement(CheckSquare);

    expect(page.root).toEqualHtml(`
      <icon-check-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-check-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckSquare],
      html: `<icon-check-square stroke="blue"></icon-check-square>`,
    });

    const svg = createElement(CheckSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-check-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-check-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheckSquare],
      html: `<icon-check-square stroke-width="2"></icon-check-square>`,
    });

    const svg = createElement(CheckSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-check-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-check-square>
    `);
  });
});
