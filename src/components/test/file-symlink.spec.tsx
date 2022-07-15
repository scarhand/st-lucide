import { newSpecPage } from '@stencil/core/testing';
import { IconFileSymlink } from '../file-symlink';
import { createElement, FileSymlink }  from 'lucide';

describe('icon-file-symlink', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileSymlink],
      html: `<icon-file-symlink></icon-file-symlink>`,
    });

    const svg = createElement(FileSymlink);

    expect(page.root).toEqualHtml(`
      <icon-file-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-symlink>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSymlink],
      html: `<icon-file-symlink stroke="blue"></icon-file-symlink>`,
    });

    const svg = createElement(FileSymlink);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-symlink>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSymlink],
      html: `<icon-file-symlink stroke-width="2"></icon-file-symlink>`,
    });

    const svg = createElement(FileSymlink);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-symlink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-symlink>
    `);
  });
});
