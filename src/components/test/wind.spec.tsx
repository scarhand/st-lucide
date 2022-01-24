import { newSpecPage } from '@stencil/core/testing';
import { IconWind } from '../wind';
import { createElement, Wind }  from 'lucide';

describe('icon-wind', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWind],
      html: `<icon-wind></icon-wind>`,
    });

    const svg = createElement(Wind);

    expect(page.root).toEqualHtml(`
      <icon-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wind>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWind],
      html: `<icon-wind stroke="blue"></icon-wind>`,
    });

    const svg = createElement(Wind);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wind>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWind],
      html: `<icon-wind stroke-width="2"></icon-wind>`,
    });

    const svg = createElement(Wind);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wind>
    `);
  });
});
