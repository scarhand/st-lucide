import { newSpecPage } from '@stencil/core/testing';
import { IconLayers } from '../layers';
import { createElement, Layers }  from 'lucide';

describe('icon-layers', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayers],
      html: `<icon-layers></icon-layers>`,
    });

    const svg = createElement(Layers);

    expect(page.root).toEqualHtml(`
      <icon-layers class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layers>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayers],
      html: `<icon-layers stroke="blue"></icon-layers>`,
    });

    const svg = createElement(Layers);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layers class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layers>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayers],
      html: `<icon-layers stroke-width="2"></icon-layers>`,
    });

    const svg = createElement(Layers);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layers class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layers>
    `);
  });
});
