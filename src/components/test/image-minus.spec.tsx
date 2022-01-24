import { newSpecPage } from '@stencil/core/testing';
import { IconImageMinus } from '../image-minus';
import { createElement, ImageMinus }  from 'lucide';

describe('icon-image-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconImageMinus],
      html: `<icon-image-minus></icon-image-minus>`,
    });

    const svg = createElement(ImageMinus);

    expect(page.root).toEqualHtml(`
      <icon-image-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-image-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImageMinus],
      html: `<icon-image-minus stroke="blue"></icon-image-minus>`,
    });

    const svg = createElement(ImageMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-image-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-image-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImageMinus],
      html: `<icon-image-minus stroke-width="2"></icon-image-minus>`,
    });

    const svg = createElement(ImageMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-image-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-image-minus>
    `);
  });
});
