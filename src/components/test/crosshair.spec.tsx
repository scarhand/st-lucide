import { newSpecPage } from '@stencil/core/testing';
import { IconCrosshair } from '../crosshair';
import { createElement, Crosshair }  from 'lucide';

describe('icon-crosshair', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCrosshair],
      html: `<icon-crosshair></icon-crosshair>`,
    });

    const svg = createElement(Crosshair);

    expect(page.root).toEqualHtml(`
      <icon-crosshair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-crosshair>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrosshair],
      html: `<icon-crosshair stroke="blue"></icon-crosshair>`,
    });

    const svg = createElement(Crosshair);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-crosshair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-crosshair>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrosshair],
      html: `<icon-crosshair stroke-width="2"></icon-crosshair>`,
    });

    const svg = createElement(Crosshair);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-crosshair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-crosshair>
    `);
  });
});
