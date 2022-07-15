import { newSpecPage } from '@stencil/core/testing';
import { IconFileSearch2 } from '../file-search-2';
import { createElement, FileSearch2 }  from 'lucide';

describe('icon-file-search-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch2],
      html: `<icon-file-search-2></icon-file-search-2>`,
    });

    const svg = createElement(FileSearch2);

    expect(page.root).toEqualHtml(`
      <icon-file-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-search-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch2],
      html: `<icon-file-search-2 stroke="blue"></icon-file-search-2>`,
    });

    const svg = createElement(FileSearch2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-search-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch2],
      html: `<icon-file-search-2 stroke-width="2"></icon-file-search-2>`,
    });

    const svg = createElement(FileSearch2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-search-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-search-2>
    `);
  });
});
