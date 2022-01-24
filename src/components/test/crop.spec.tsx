import { newSpecPage } from '@stencil/core/testing';
import { IconCrop } from '../crop';
import { createElement, Crop }  from 'lucide';

describe('icon-crop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCrop],
      html: `<icon-crop></icon-crop>`,
    });

    const svg = createElement(Crop);

    expect(page.root).toEqualHtml(`
      <icon-crop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-crop>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrop],
      html: `<icon-crop stroke="blue"></icon-crop>`,
    });

    const svg = createElement(Crop);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-crop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-crop>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrop],
      html: `<icon-crop stroke-width="2"></icon-crop>`,
    });

    const svg = createElement(Crop);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-crop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-crop>
    `);
  });
});
