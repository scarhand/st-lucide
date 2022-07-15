import { newSpecPage } from '@stencil/core/testing';
import { IconFolderTree } from '../folder-tree';
import { createElement, FolderTree }  from 'lucide';

describe('icon-folder-tree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderTree],
      html: `<icon-folder-tree></icon-folder-tree>`,
    });

    const svg = createElement(FolderTree);

    expect(page.root).toEqualHtml(`
      <icon-folder-tree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-tree>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderTree],
      html: `<icon-folder-tree stroke="blue"></icon-folder-tree>`,
    });

    const svg = createElement(FolderTree);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-tree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-tree>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderTree],
      html: `<icon-folder-tree stroke-width="2"></icon-folder-tree>`,
    });

    const svg = createElement(FolderTree);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-tree class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-tree>
    `);
  });
});
