import { newSpecPage } from '@stencil/core/testing';
import { IconSquare } from '../square';
import { createElement, Square }  from 'lucide';

describe('icon-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSquare],
      html: `<icon-square></icon-square>`,
    });

    const svg = createElement(Square);

    expect(page.root).toEqualHtml(`
      <icon-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSquare],
      html: `<icon-square stroke="blue"></icon-square>`,
    });

    const svg = createElement(Square);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSquare],
      html: `<icon-square stroke-width="2"></icon-square>`,
    });

    const svg = createElement(Square);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-square>
    `);
  });
});
