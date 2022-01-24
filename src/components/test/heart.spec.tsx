import { newSpecPage } from '@stencil/core/testing';
import { IconHeart } from '../heart';
import { createElement, Heart }  from 'lucide';

describe('icon-heart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeart],
      html: `<icon-heart></icon-heart>`,
    });

    const svg = createElement(Heart);

    expect(page.root).toEqualHtml(`
      <icon-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-heart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeart],
      html: `<icon-heart stroke="blue"></icon-heart>`,
    });

    const svg = createElement(Heart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-heart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeart],
      html: `<icon-heart stroke-width="2"></icon-heart>`,
    });

    const svg = createElement(Heart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-heart>
    `);
  });
});
