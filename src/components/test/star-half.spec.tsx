import { newSpecPage } from '@stencil/core/testing';
import { IconStarHalf } from '../star-half';
import { createElement, StarHalf }  from 'lucide';

describe('icon-star-half', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStarHalf],
      html: `<icon-star-half></icon-star-half>`,
    });

    const svg = createElement(StarHalf);

    expect(page.root).toEqualHtml(`
      <icon-star-half class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-star-half>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStarHalf],
      html: `<icon-star-half stroke="blue"></icon-star-half>`,
    });

    const svg = createElement(StarHalf);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-star-half class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-star-half>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStarHalf],
      html: `<icon-star-half stroke-width="2"></icon-star-half>`,
    });

    const svg = createElement(StarHalf);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-star-half class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-star-half>
    `);
  });
});
