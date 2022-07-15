import { newSpecPage } from '@stencil/core/testing';
import { IconFolderUp } from '../folder-up';
import { createElement, FolderUp }  from 'lucide';

describe('icon-folder-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderUp],
      html: `<icon-folder-up></icon-folder-up>`,
    });

    const svg = createElement(FolderUp);

    expect(page.root).toEqualHtml(`
      <icon-folder-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderUp],
      html: `<icon-folder-up stroke="blue"></icon-folder-up>`,
    });

    const svg = createElement(FolderUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderUp],
      html: `<icon-folder-up stroke-width="2"></icon-folder-up>`,
    });

    const svg = createElement(FolderUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-up>
    `);
  });
});
