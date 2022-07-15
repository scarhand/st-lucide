import { newSpecPage } from '@stencil/core/testing';
import { IconFileBadge } from '../file-badge';
import { createElement, FileBadge }  from 'lucide';

describe('icon-file-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge],
      html: `<icon-file-badge></icon-file-badge>`,
    });

    const svg = createElement(FileBadge);

    expect(page.root).toEqualHtml(`
      <icon-file-badge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-badge>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge],
      html: `<icon-file-badge stroke="blue"></icon-file-badge>`,
    });

    const svg = createElement(FileBadge);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-badge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-badge>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBadge],
      html: `<icon-file-badge stroke-width="2"></icon-file-badge>`,
    });

    const svg = createElement(FileBadge);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-badge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-badge>
    `);
  });
});
