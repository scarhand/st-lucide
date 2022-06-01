import { newSpecPage } from '@stencil/core/testing';
import { IconStarOff } from '../star-off';
import { createElement, StarOff }  from 'lucide';

describe('icon-star-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStarOff],
      html: `<icon-star-off></icon-star-off>`,
    });

    const svg = createElement(StarOff);

    expect(page.root).toEqualHtml(`
      <icon-star-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-star-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStarOff],
      html: `<icon-star-off stroke="blue"></icon-star-off>`,
    });

    const svg = createElement(StarOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-star-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-star-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStarOff],
      html: `<icon-star-off stroke-width="2"></icon-star-off>`,
    });

    const svg = createElement(StarOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-star-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-star-off>
    `);
  });
});
