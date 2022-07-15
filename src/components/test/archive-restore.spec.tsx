import { newSpecPage } from '@stencil/core/testing';
import { IconArchiveRestore } from '../archive-restore';
import { createElement, ArchiveRestore }  from 'lucide';

describe('icon-archive-restore', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArchiveRestore],
      html: `<icon-archive-restore></icon-archive-restore>`,
    });

    const svg = createElement(ArchiveRestore);

    expect(page.root).toEqualHtml(`
      <icon-archive-restore class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-archive-restore>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArchiveRestore],
      html: `<icon-archive-restore stroke="blue"></icon-archive-restore>`,
    });

    const svg = createElement(ArchiveRestore);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-archive-restore class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-archive-restore>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArchiveRestore],
      html: `<icon-archive-restore stroke-width="2"></icon-archive-restore>`,
    });

    const svg = createElement(ArchiveRestore);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-archive-restore class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-archive-restore>
    `);
  });
});
