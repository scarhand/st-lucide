import { newSpecPage } from '@stencil/core/testing';
import { IconStar } from '../star';
import { createElement, Star }  from 'lucide';

describe('icon-star', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStar],
      html: `<icon-star></icon-star>`,
    });

    const svg = createElement(Star);

    expect(page.root).toEqualHtml(`
      <icon-star class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-star>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStar],
      html: `<icon-star stroke="blue"></icon-star>`,
    });

    const svg = createElement(Star);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-star class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-star>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStar],
      html: `<icon-star stroke-width="2"></icon-star>`,
    });

    const svg = createElement(Star);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-star class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-star>
    `);
  });
});
