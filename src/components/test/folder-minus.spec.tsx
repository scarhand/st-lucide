import { newSpecPage } from '@stencil/core/testing';
import { IconFolderMinus } from '../folder-minus';
import { createElement, FolderMinus }  from 'lucide';

describe('icon-folder-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderMinus],
      html: `<icon-folder-minus></icon-folder-minus>`,
    });

    const svg = createElement(FolderMinus);

    expect(page.root).toEqualHtml(`
      <icon-folder-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderMinus],
      html: `<icon-folder-minus stroke="blue"></icon-folder-minus>`,
    });

    const svg = createElement(FolderMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderMinus],
      html: `<icon-folder-minus stroke-width="2"></icon-folder-minus>`,
    });

    const svg = createElement(FolderMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-minus>
    `);
  });
});
