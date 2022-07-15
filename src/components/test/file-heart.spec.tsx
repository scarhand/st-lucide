import { newSpecPage } from '@stencil/core/testing';
import { IconFileHeart } from '../file-heart';
import { createElement, FileHeart }  from 'lucide';

describe('icon-file-heart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileHeart],
      html: `<icon-file-heart></icon-file-heart>`,
    });

    const svg = createElement(FileHeart);

    expect(page.root).toEqualHtml(`
      <icon-file-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-heart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileHeart],
      html: `<icon-file-heart stroke="blue"></icon-file-heart>`,
    });

    const svg = createElement(FileHeart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-heart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileHeart],
      html: `<icon-file-heart stroke-width="2"></icon-file-heart>`,
    });

    const svg = createElement(FileHeart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-heart>
    `);
  });
});
