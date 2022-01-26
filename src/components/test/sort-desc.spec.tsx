import { newSpecPage } from '@stencil/core/testing';
import { IconSortDesc } from '../sort-desc';
import { createElement, SortDesc }  from 'lucide';

describe('icon-sort-desc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSortDesc],
      html: `<icon-sort-desc></icon-sort-desc>`,
    });

    const svg = createElement(SortDesc);

    expect(page.root).toEqualHtml(`
      <icon-sort-desc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sort-desc>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSortDesc],
      html: `<icon-sort-desc stroke="blue"></icon-sort-desc>`,
    });

    const svg = createElement(SortDesc);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sort-desc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sort-desc>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSortDesc],
      html: `<icon-sort-desc stroke-width="2"></icon-sort-desc>`,
    });

    const svg = createElement(SortDesc);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sort-desc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sort-desc>
    `);
  });
});
