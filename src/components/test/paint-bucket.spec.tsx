import { newSpecPage } from '@stencil/core/testing';
import { IconPaintBucket } from '../paint-bucket';
import { createElement, PaintBucket }  from 'lucide';

describe('icon-paint-bucket', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPaintBucket],
      html: `<icon-paint-bucket></icon-paint-bucket>`,
    });

    const svg = createElement(PaintBucket);

    expect(page.root).toEqualHtml(`
      <icon-paint-bucket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-paint-bucket>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintBucket],
      html: `<icon-paint-bucket stroke="blue"></icon-paint-bucket>`,
    });

    const svg = createElement(PaintBucket);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-paint-bucket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-paint-bucket>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintBucket],
      html: `<icon-paint-bucket stroke-width="2"></icon-paint-bucket>`,
    });

    const svg = createElement(PaintBucket);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-paint-bucket class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-paint-bucket>
    `);
  });
});
