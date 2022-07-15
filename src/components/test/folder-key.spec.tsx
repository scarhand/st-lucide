import { newSpecPage } from '@stencil/core/testing';
import { IconFolderKey } from '../folder-key';
import { createElement, FolderKey }  from 'lucide';

describe('icon-folder-key', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderKey],
      html: `<icon-folder-key></icon-folder-key>`,
    });

    const svg = createElement(FolderKey);

    expect(page.root).toEqualHtml(`
      <icon-folder-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-key>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderKey],
      html: `<icon-folder-key stroke="blue"></icon-folder-key>`,
    });

    const svg = createElement(FolderKey);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-key>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderKey],
      html: `<icon-folder-key stroke-width="2"></icon-folder-key>`,
    });

    const svg = createElement(FolderKey);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-key>
    `);
  });
});
