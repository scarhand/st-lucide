import { newSpecPage } from '@stencil/core/testing';
import { IconXSquare } from '../x-square';
import { createElement, XSquare }  from 'lucide';

describe('icon-x-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconXSquare],
      html: `<icon-x-square></icon-x-square>`,
    });

    const svg = createElement(XSquare);

    expect(page.root).toEqualHtml(`
      <icon-x-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-x-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXSquare],
      html: `<icon-x-square stroke="blue"></icon-x-square>`,
    });

    const svg = createElement(XSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-x-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-x-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXSquare],
      html: `<icon-x-square stroke-width="2"></icon-x-square>`,
    });

    const svg = createElement(XSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-x-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-x-square>
    `);
  });
});
