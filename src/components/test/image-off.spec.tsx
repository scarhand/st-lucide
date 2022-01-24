import { newSpecPage } from '@stencil/core/testing';
import { IconImageOff } from '../image-off';
import { createElement, ImageOff }  from 'lucide';

describe('icon-image-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconImageOff],
      html: `<icon-image-off></icon-image-off>`,
    });

    const svg = createElement(ImageOff);

    expect(page.root).toEqualHtml(`
      <icon-image-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-image-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImageOff],
      html: `<icon-image-off stroke="blue"></icon-image-off>`,
    });

    const svg = createElement(ImageOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-image-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-image-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImageOff],
      html: `<icon-image-off stroke-width="2"></icon-image-off>`,
    });

    const svg = createElement(ImageOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-image-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-image-off>
    `);
  });
});
