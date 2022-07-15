import { newSpecPage } from '@stencil/core/testing';
import { IconFolderCheck } from '../folder-check';
import { createElement, FolderCheck }  from 'lucide';

describe('icon-folder-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderCheck],
      html: `<icon-folder-check></icon-folder-check>`,
    });

    const svg = createElement(FolderCheck);

    expect(page.root).toEqualHtml(`
      <icon-folder-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCheck],
      html: `<icon-folder-check stroke="blue"></icon-folder-check>`,
    });

    const svg = createElement(FolderCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderCheck],
      html: `<icon-folder-check stroke-width="2"></icon-folder-check>`,
    });

    const svg = createElement(FolderCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-check>
    `);
  });
});
