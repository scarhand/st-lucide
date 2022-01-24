import { newSpecPage } from '@stencil/core/testing';
import { IconImage } from '../image';
import { createElement, Image }  from 'lucide';

describe('icon-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconImage],
      html: `<icon-image></icon-image>`,
    });

    const svg = createElement(Image);

    expect(page.root).toEqualHtml(`
      <icon-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-image>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImage],
      html: `<icon-image stroke="blue"></icon-image>`,
    });

    const svg = createElement(Image);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-image>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImage],
      html: `<icon-image stroke-width="2"></icon-image>`,
    });

    const svg = createElement(Image);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-image>
    `);
  });
});
