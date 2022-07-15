import { newSpecPage } from '@stencil/core/testing';
import { IconFolderSearch2 } from '../folder-search-2';
import { createElement, FolderSearch2 }  from 'lucide';

describe('icon-folder-search-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch2],
      html: `<icon-folder-search-2></icon-folder-search-2>`,
    });

    const svg = createElement(FolderSearch2);

    expect(page.root).toEqualHtml(`
      <icon-folder-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-search-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch2],
      html: `<icon-folder-search-2 stroke="blue"></icon-folder-search-2>`,
    });

    const svg = createElement(FolderSearch2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-search-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch2],
      html: `<icon-folder-search-2 stroke-width="2"></icon-folder-search-2>`,
    });

    const svg = createElement(FolderSearch2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-search-2>
    `);
  });
});
