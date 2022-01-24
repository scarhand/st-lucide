import { newSpecPage } from '@stencil/core/testing';
import { IconImagePlus } from '../image-plus';
import { createElement, ImagePlus }  from 'lucide';

describe('icon-image-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconImagePlus],
      html: `<icon-image-plus></icon-image-plus>`,
    });

    const svg = createElement(ImagePlus);

    expect(page.root).toEqualHtml(`
      <icon-image-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-image-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImagePlus],
      html: `<icon-image-plus stroke="blue"></icon-image-plus>`,
    });

    const svg = createElement(ImagePlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-image-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-image-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImagePlus],
      html: `<icon-image-plus stroke-width="2"></icon-image-plus>`,
    });

    const svg = createElement(ImagePlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-image-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-image-plus>
    `);
  });
});
