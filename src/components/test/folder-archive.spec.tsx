import { newSpecPage } from '@stencil/core/testing';
import { IconFolderArchive } from '../folder-archive';
import { createElement, FolderArchive }  from 'lucide';

describe('icon-folder-archive', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderArchive],
      html: `<icon-folder-archive></icon-folder-archive>`,
    });

    const svg = createElement(FolderArchive);

    expect(page.root).toEqualHtml(`
      <icon-folder-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-archive>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderArchive],
      html: `<icon-folder-archive stroke="blue"></icon-folder-archive>`,
    });

    const svg = createElement(FolderArchive);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-archive>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderArchive],
      html: `<icon-folder-archive stroke-width="2"></icon-folder-archive>`,
    });

    const svg = createElement(FolderArchive);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-archive>
    `);
  });
});
