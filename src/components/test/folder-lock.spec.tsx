import { newSpecPage } from '@stencil/core/testing';
import { IconFolderLock } from '../folder-lock';
import { createElement, FolderLock }  from 'lucide';

describe('icon-folder-lock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderLock],
      html: `<icon-folder-lock></icon-folder-lock>`,
    });

    const svg = createElement(FolderLock);

    expect(page.root).toEqualHtml(`
      <icon-folder-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-lock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderLock],
      html: `<icon-folder-lock stroke="blue"></icon-folder-lock>`,
    });

    const svg = createElement(FolderLock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-lock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderLock],
      html: `<icon-folder-lock stroke-width="2"></icon-folder-lock>`,
    });

    const svg = createElement(FolderLock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-lock>
    `);
  });
});
