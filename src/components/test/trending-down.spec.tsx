import { newSpecPage } from '@stencil/core/testing';
import { IconTrendingDown } from '../trending-down';
import { createElement, TrendingDown }  from 'lucide';

describe('icon-trending-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrendingDown],
      html: `<icon-trending-down></icon-trending-down>`,
    });

    const svg = createElement(TrendingDown);

    expect(page.root).toEqualHtml(`
      <icon-trending-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trending-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrendingDown],
      html: `<icon-trending-down stroke="blue"></icon-trending-down>`,
    });

    const svg = createElement(TrendingDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trending-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trending-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrendingDown],
      html: `<icon-trending-down stroke-width="2"></icon-trending-down>`,
    });

    const svg = createElement(TrendingDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trending-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trending-down>
    `);
  });
});
