import { newSpecPage } from '@stencil/core/testing';
import { IconHandMetal } from '../hand-metal';
import { createElement, HandMetal }  from 'lucide';

describe('icon-hand-metal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHandMetal],
      html: `<icon-hand-metal></icon-hand-metal>`,
    });

    const svg = createElement(HandMetal);

    expect(page.root).toEqualHtml(`
      <icon-hand-metal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hand-metal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHandMetal],
      html: `<icon-hand-metal stroke="blue"></icon-hand-metal>`,
    });

    const svg = createElement(HandMetal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hand-metal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hand-metal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHandMetal],
      html: `<icon-hand-metal stroke-width="2"></icon-hand-metal>`,
    });

    const svg = createElement(HandMetal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hand-metal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hand-metal>
    `);
  });
});
