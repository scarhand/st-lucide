import { newSpecPage } from '@stencil/core/testing';
import { IconFolderCog } from '../folder-cog';
import { createElement, FolderCog }  from 'lucide';

describe('icon-folder-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog],
      html: `<icon-folder-cog></icon-folder-cog>`,
    });

    const svg = createElement(FolderCog);

    expect(page.root).toEqualHtml(`
      <icon-folder-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog],
      html: `<icon-folder-cog stroke="blue"></icon-folder-cog>`,
    });

    const svg = createElement(FolderCog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog],
      html: `<icon-folder-cog stroke-width="2"></icon-folder-cog>`,
    });

    const svg = createElement(FolderCog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-cog>
    `);
  });
});
