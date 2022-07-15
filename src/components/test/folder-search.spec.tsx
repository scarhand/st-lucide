import { newSpecPage } from '@stencil/core/testing';
import { IconFolderSearch } from '../folder-search';
import { createElement, FolderSearch }  from 'lucide';

describe('icon-folder-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch],
      html: `<icon-folder-search></icon-folder-search>`,
    });

    const svg = createElement(FolderSearch);

    expect(page.root).toEqualHtml(`
      <icon-folder-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch],
      html: `<icon-folder-search stroke="blue"></icon-folder-search>`,
    });

    const svg = createElement(FolderSearch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSearch],
      html: `<icon-folder-search stroke-width="2"></icon-folder-search>`,
    });

    const svg = createElement(FolderSearch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-search>
    `);
  });
});
