import { newSpecPage } from '@stencil/core/testing';
import { IconZoomOut } from '../zoom-out';
import { createElement, ZoomOut }  from 'lucide';

describe('icon-zoom-out', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconZoomOut],
      html: `<icon-zoom-out></icon-zoom-out>`,
    });

    const svg = createElement(ZoomOut);

    expect(page.root).toEqualHtml(`
      <icon-zoom-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-zoom-out>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZoomOut],
      html: `<icon-zoom-out stroke="blue"></icon-zoom-out>`,
    });

    const svg = createElement(ZoomOut);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-zoom-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-zoom-out>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZoomOut],
      html: `<icon-zoom-out stroke-width="2"></icon-zoom-out>`,
    });

    const svg = createElement(ZoomOut);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-zoom-out class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-zoom-out>
    `);
  });
});
