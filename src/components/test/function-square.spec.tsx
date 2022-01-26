import { newSpecPage } from '@stencil/core/testing';
import { IconFunctionSquare } from '../function-square';
import { createElement, FunctionSquare }  from 'lucide';

describe('icon-function-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFunctionSquare],
      html: `<icon-function-square></icon-function-square>`,
    });

    const svg = createElement(FunctionSquare);

    expect(page.root).toEqualHtml(`
      <icon-function-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-function-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFunctionSquare],
      html: `<icon-function-square stroke="blue"></icon-function-square>`,
    });

    const svg = createElement(FunctionSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-function-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-function-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFunctionSquare],
      html: `<icon-function-square stroke-width="2"></icon-function-square>`,
    });

    const svg = createElement(FunctionSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-function-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-function-square>
    `);
  });
});
