import { newSpecPage } from '@stencil/core/testing';
import { IconFolderX } from '../folder-x';
import { createElement, FolderX }  from 'lucide';

describe('icon-folder-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderX],
      html: `<icon-folder-x></icon-folder-x>`,
    });

    const svg = createElement(FolderX);

    expect(page.root).toEqualHtml(`
      <icon-folder-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderX],
      html: `<icon-folder-x stroke="blue"></icon-folder-x>`,
    });

    const svg = createElement(FolderX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderX],
      html: `<icon-folder-x stroke-width="2"></icon-folder-x>`,
    });

    const svg = createElement(FolderX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-x>
    `);
  });
});
