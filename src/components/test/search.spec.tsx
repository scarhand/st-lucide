import { newSpecPage } from '@stencil/core/testing';
import { IconSearch } from '../search';
import { createElement, Search }  from 'lucide';

describe('icon-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSearch],
      html: `<icon-search></icon-search>`,
    });

    const svg = createElement(Search);

    expect(page.root).toEqualHtml(`
      <icon-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-search>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSearch],
      html: `<icon-search stroke="blue"></icon-search>`,
    });

    const svg = createElement(Search);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-search>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSearch],
      html: `<icon-search stroke-width="2"></icon-search>`,
    });

    const svg = createElement(Search);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-search class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-search>
    `);
  });
});
