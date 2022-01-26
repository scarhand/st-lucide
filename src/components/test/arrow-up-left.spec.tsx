import { newSpecPage } from '@stencil/core/testing';
import { IconArrowUpLeft } from '../arrow-up-left';
import { createElement, ArrowUpLeft }  from 'lucide';

describe('icon-arrow-up-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpLeft],
      html: `<icon-arrow-up-left></icon-arrow-up-left>`,
    });

    const svg = createElement(ArrowUpLeft);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-up-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpLeft],
      html: `<icon-arrow-up-left stroke="blue"></icon-arrow-up-left>`,
    });

    const svg = createElement(ArrowUpLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-up-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpLeft],
      html: `<icon-arrow-up-left stroke-width="2"></icon-arrow-up-left>`,
    });

    const svg = createElement(ArrowUpLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-up-left>
    `);
  });
});
