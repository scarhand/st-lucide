import { newSpecPage } from '@stencil/core/testing';
import { IconFolderDown } from '../folder-down';
import { createElement, FolderDown }  from 'lucide';

describe('icon-folder-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderDown],
      html: `<icon-folder-down></icon-folder-down>`,
    });

    const svg = createElement(FolderDown);

    expect(page.root).toEqualHtml(`
      <icon-folder-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderDown],
      html: `<icon-folder-down stroke="blue"></icon-folder-down>`,
    });

    const svg = createElement(FolderDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderDown],
      html: `<icon-folder-down stroke-width="2"></icon-folder-down>`,
    });

    const svg = createElement(FolderDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-down>
    `);
  });
});
