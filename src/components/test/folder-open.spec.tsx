import { newSpecPage } from '@stencil/core/testing';
import { IconFolderOpen } from '../folder-open';
import { createElement, FolderOpen }  from 'lucide';

describe('icon-folder-open', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolderOpen],
      html: `<icon-folder-open></icon-folder-open>`,
    });

    const svg = createElement(FolderOpen);

    expect(page.root).toEqualHtml(`
      <icon-folder-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder-open>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderOpen],
      html: `<icon-folder-open stroke="blue"></icon-folder-open>`,
    });

    const svg = createElement(FolderOpen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder-open>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolderOpen],
      html: `<icon-folder-open stroke-width="2"></icon-folder-open>`,
    });

    const svg = createElement(FolderOpen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder-open>
    `);
  });
});
