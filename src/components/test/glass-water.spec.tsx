import { newSpecPage } from '@stencil/core/testing';
import { IconGlassWater } from '../glass-water';
import { createElement, GlassWater }  from 'lucide';

describe('icon-glass-water', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGlassWater],
      html: `<icon-glass-water></icon-glass-water>`,
    });

    const svg = createElement(GlassWater);

    expect(page.root).toEqualHtml(`
      <icon-glass-water class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-glass-water>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlassWater],
      html: `<icon-glass-water stroke="blue"></icon-glass-water>`,
    });

    const svg = createElement(GlassWater);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-glass-water class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-glass-water>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlassWater],
      html: `<icon-glass-water stroke-width="2"></icon-glass-water>`,
    });

    const svg = createElement(GlassWater);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-glass-water class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-glass-water>
    `);
  });
});
