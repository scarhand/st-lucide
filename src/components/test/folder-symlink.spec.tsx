import { newSpecPage } from '@stencil/core/testing';
import { IconFolderSymlink } from '../folder-symlink';
import { createElement, FolderSymlink }  from 'lucide';

describe('icon-folder-symlink', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderSymlink],
      html: `<icon-folder-symlink></icon-folder-symlink>`,
    });

    const svg = createElement(FolderSymlink);

    expect(page.root).toEqualHtml(`
      <icon-folder-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-symlink>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSymlink],
      html: `<icon-folder-symlink stroke="blue"></icon-folder-symlink>`,
    });

    const svg = createElement(FolderSymlink);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-symlink>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderSymlink],
      html: `<icon-folder-symlink stroke-width="2"></icon-folder-symlink>`,
    });

    const svg = createElement(FolderSymlink);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-symlink>
    `);
  });
});
