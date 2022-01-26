import { newSpecPage } from '@stencil/core/testing';
import { IconLayoutGrid } from '../layout-grid';
import { createElement, LayoutGrid }  from 'lucide';

describe('icon-layout-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayoutGrid],
      html: `<icon-layout-grid></icon-layout-grid>`,
    });

    const svg = createElement(LayoutGrid);

    expect(page.root).toEqualHtml(`
      <icon-layout-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layout-grid>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutGrid],
      html: `<icon-layout-grid stroke="blue"></icon-layout-grid>`,
    });

    const svg = createElement(LayoutGrid);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layout-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layout-grid>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutGrid],
      html: `<icon-layout-grid stroke-width="2"></icon-layout-grid>`,
    });

    const svg = createElement(LayoutGrid);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layout-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layout-grid>
    `);
  });
});
