import { newSpecPage } from '@stencil/core/testing';
import { IconArrowUp } from '../arrow-up';
import { createElement, ArrowUp }  from 'lucide';

describe('icon-arrow-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowUp],
      html: `<icon-arrow-up></icon-arrow-up>`,
    });

    const svg = createElement(ArrowUp);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUp],
      html: `<icon-arrow-up stroke="blue"></icon-arrow-up>`,
    });

    const svg = createElement(ArrowUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUp],
      html: `<icon-arrow-up stroke-width="2"></icon-arrow-up>`,
    });

    const svg = createElement(ArrowUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-up>
    `);
  });
});
