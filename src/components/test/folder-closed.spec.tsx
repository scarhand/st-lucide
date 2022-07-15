import { newSpecPage } from '@stencil/core/testing';
import { IconFolderClosed } from '../folder-closed';
import { createElement, FolderClosed }  from 'lucide';

describe('icon-folder-closed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderClosed],
      html: `<icon-folder-closed></icon-folder-closed>`,
    });

    const svg = createElement(FolderClosed);

    expect(page.root).toEqualHtml(`
      <icon-folder-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-closed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderClosed],
      html: `<icon-folder-closed stroke="blue"></icon-folder-closed>`,
    });

    const svg = createElement(FolderClosed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-closed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderClosed],
      html: `<icon-folder-closed stroke-width="2"></icon-folder-closed>`,
    });

    const svg = createElement(FolderClosed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-closed>
    `);
  });
});
