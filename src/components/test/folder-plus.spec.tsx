import { newSpecPage } from '@stencil/core/testing';
import { IconFolderPlus } from '../folder-plus';
import { createElement, FolderPlus }  from 'lucide';

describe('icon-folder-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderPlus],
      html: `<icon-folder-plus></icon-folder-plus>`,
    });

    const svg = createElement(FolderPlus);

    expect(page.root).toEqualHtml(`
      <icon-folder-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderPlus],
      html: `<icon-folder-plus stroke="blue"></icon-folder-plus>`,
    });

    const svg = createElement(FolderPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderPlus],
      html: `<icon-folder-plus stroke-width="2"></icon-folder-plus>`,
    });

    const svg = createElement(FolderPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-plus>
    `);
  });
});
