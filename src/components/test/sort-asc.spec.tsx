import { newSpecPage } from '@stencil/core/testing';
import { IconSortAsc } from '../sort-asc';
import { createElement, SortAsc }  from 'lucide';

describe('icon-sort-asc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSortAsc],
      html: `<icon-sort-asc></icon-sort-asc>`,
    });

    const svg = createElement(SortAsc);

    expect(page.root).toEqualHtml(`
      <icon-sort-asc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sort-asc>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSortAsc],
      html: `<icon-sort-asc stroke="blue"></icon-sort-asc>`,
    });

    const svg = createElement(SortAsc);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sort-asc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sort-asc>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSortAsc],
      html: `<icon-sort-asc stroke-width="2"></icon-sort-asc>`,
    });

    const svg = createElement(SortAsc);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sort-asc class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sort-asc>
    `);
  });
});
