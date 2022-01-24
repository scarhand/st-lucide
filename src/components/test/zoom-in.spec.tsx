import { newSpecPage } from '@stencil/core/testing';
import { IconZoomIn } from '../zoom-in';
import { createElement, ZoomIn }  from 'lucide';

describe('icon-zoom-in', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconZoomIn],
      html: `<icon-zoom-in></icon-zoom-in>`,
    });

    const svg = createElement(ZoomIn);

    expect(page.root).toEqualHtml(`
      <icon-zoom-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-zoom-in>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZoomIn],
      html: `<icon-zoom-in stroke="blue"></icon-zoom-in>`,
    });

    const svg = createElement(ZoomIn);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-zoom-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-zoom-in>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconZoomIn],
      html: `<icon-zoom-in stroke-width="2"></icon-zoom-in>`,
    });

    const svg = createElement(ZoomIn);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-zoom-in class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-zoom-in>
    `);
  });
});
