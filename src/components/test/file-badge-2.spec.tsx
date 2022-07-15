import { newSpecPage } from '@stencil/core/testing';
import { IconFileBadge2 } from '../file-badge-2';
import { createElement, FileBadge2 }  from 'lucide';

describe('icon-file-badge-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge2],
      html: `<icon-file-badge-2></icon-file-badge-2>`,
    });

    const svg = createElement(FileBadge2);

    expect(page.root).toEqualHtml(`
      <icon-file-badge-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-badge-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge2],
      html: `<icon-file-badge-2 stroke="blue"></icon-file-badge-2>`,
    });

    const svg = createElement(FileBadge2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-badge-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-badge-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge2],
      html: `<icon-file-badge-2 stroke-width="2"></icon-file-badge-2>`,
    });

    const svg = createElement(FileBadge2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-badge-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-badge-2>
    `);
  });
});
