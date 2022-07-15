import { newSpecPage } from '@stencil/core/testing';
import { IconFolderCog2 } from '../folder-cog-2';
import { createElement, FolderCog2 }  from 'lucide';

describe('icon-folder-cog-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog2],
      html: `<icon-folder-cog-2></icon-folder-cog-2>`,
    });

    const svg = createElement(FolderCog2);

    expect(page.root).toEqualHtml(`
      <icon-folder-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-cog-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog2],
      html: `<icon-folder-cog-2 stroke="blue"></icon-folder-cog-2>`,
    });

    const svg = createElement(FolderCog2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-cog-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCog2],
      html: `<icon-folder-cog-2 stroke-width="2"></icon-folder-cog-2>`,
    });

    const svg = createElement(FolderCog2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-cog-2>
    `);
  });
});
