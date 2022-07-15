import { newSpecPage } from '@stencil/core/testing';
import { IconFolderEdit } from '../folder-edit';
import { createElement, FolderEdit }  from 'lucide';

describe('icon-folder-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderEdit],
      html: `<icon-folder-edit></icon-folder-edit>`,
    });

    const svg = createElement(FolderEdit);

    expect(page.root).toEqualHtml(`
      <icon-folder-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-edit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderEdit],
      html: `<icon-folder-edit stroke="blue"></icon-folder-edit>`,
    });

    const svg = createElement(FolderEdit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-edit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderEdit],
      html: `<icon-folder-edit stroke-width="2"></icon-folder-edit>`,
    });

    const svg = createElement(FolderEdit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-edit>
    `);
  });
});
