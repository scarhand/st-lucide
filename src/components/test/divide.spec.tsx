import { newSpecPage } from '@stencil/core/testing';
import { IconDivide } from '../divide';
import { createElement, Divide }  from 'lucide';

describe('icon-divide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDivide],
      html: `<icon-divide></icon-divide>`,
    });

    const svg = createElement(Divide);

    expect(page.root).toEqualHtml(`
      <icon-divide class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-divide>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivide],
      html: `<icon-divide stroke="blue"></icon-divide>`,
    });

    const svg = createElement(Divide);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-divide class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-divide>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivide],
      html: `<icon-divide stroke-width="2"></icon-divide>`,
    });

    const svg = createElement(Divide);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-divide class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-divide>
    `);
  });
});
