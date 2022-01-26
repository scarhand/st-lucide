import { newSpecPage } from '@stencil/core/testing';
import { IconEuro } from '../euro';
import { createElement, Euro }  from 'lucide';

describe('icon-euro', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEuro],
      html: `<icon-euro></icon-euro>`,
    });

    const svg = createElement(Euro);

    expect(page.root).toEqualHtml(`
      <icon-euro class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-euro>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEuro],
      html: `<icon-euro stroke="blue"></icon-euro>`,
    });

    const svg = createElement(Euro);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-euro class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-euro>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEuro],
      html: `<icon-euro stroke-width="2"></icon-euro>`,
    });

    const svg = createElement(Euro);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-euro class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-euro>
    `);
  });
});
