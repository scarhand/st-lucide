import { newSpecPage } from '@stencil/core/testing';
import { IconArrowBigUp } from '../arrow-big-up';
import { createElement, ArrowBigUp }  from 'lucide';

describe('icon-arrow-big-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigUp],
      html: `<icon-arrow-big-up></icon-arrow-big-up>`,
    });

    const svg = createElement(ArrowBigUp);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-big-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigUp],
      html: `<icon-arrow-big-up stroke="blue"></icon-arrow-big-up>`,
    });

    const svg = createElement(ArrowBigUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-big-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigUp],
      html: `<icon-arrow-big-up stroke-width="2"></icon-arrow-big-up>`,
    });

    const svg = createElement(ArrowBigUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-big-up>
    `);
  });
});
