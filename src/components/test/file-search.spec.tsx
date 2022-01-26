import { newSpecPage } from '@stencil/core/testing';
import { IconFileSearch } from '../file-search';
import { createElement, FileSearch }  from 'lucide';

describe('icon-file-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch],
      html: `<icon-file-search></icon-file-search>`,
    });

    const svg = createElement(FileSearch);

    expect(page.root).toEqualHtml(`
      <icon-file-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch],
      html: `<icon-file-search stroke="blue"></icon-file-search>`,
    });

    const svg = createElement(FileSearch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileSearch],
      html: `<icon-file-search stroke-width="2"></icon-file-search>`,
    });

    const svg = createElement(FileSearch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-search>
    `);
  });
});
