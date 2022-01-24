import { newSpecPage } from '@stencil/core/testing';
import { IconTrendingUp } from '../trending-up';
import { createElement, TrendingUp }  from 'lucide';

describe('icon-trending-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrendingUp],
      html: `<icon-trending-up></icon-trending-up>`,
    });

    const svg = createElement(TrendingUp);

    expect(page.root).toEqualHtml(`
      <icon-trending-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trending-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrendingUp],
      html: `<icon-trending-up stroke="blue"></icon-trending-up>`,
    });

    const svg = createElement(TrendingUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trending-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trending-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrendingUp],
      html: `<icon-trending-up stroke-width="2"></icon-trending-up>`,
    });

    const svg = createElement(TrendingUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trending-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trending-up>
    `);
  });
});
