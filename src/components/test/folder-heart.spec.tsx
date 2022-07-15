import { newSpecPage } from '@stencil/core/testing';
import { IconFolderHeart } from '../folder-heart';
import { createElement, FolderHeart }  from 'lucide';

describe('icon-folder-heart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderHeart],
      html: `<icon-folder-heart></icon-folder-heart>`,
    });

    const svg = createElement(FolderHeart);

    expect(page.root).toEqualHtml(`
      <icon-folder-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-heart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderHeart],
      html: `<icon-folder-heart stroke="blue"></icon-folder-heart>`,
    });

    const svg = createElement(FolderHeart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-heart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderHeart],
      html: `<icon-folder-heart stroke-width="2"></icon-folder-heart>`,
    });

    const svg = createElement(FolderHeart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-heart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-heart>
    `);
  });
});
