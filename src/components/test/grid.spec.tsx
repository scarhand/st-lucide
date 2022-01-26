import { newSpecPage } from '@stencil/core/testing';
import { IconGrid } from '../grid';
import { createElement, Grid }  from 'lucide';

describe('icon-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGrid],
      html: `<icon-grid></icon-grid>`,
    });

    const svg = createElement(Grid);

    expect(page.root).toEqualHtml(`
      <icon-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-grid>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrid],
      html: `<icon-grid stroke="blue"></icon-grid>`,
    });

    const svg = createElement(Grid);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-grid>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGrid],
      html: `<icon-grid stroke-width="2"></icon-grid>`,
    });

    const svg = createElement(Grid);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-grid class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-grid>
    `);
  });
});
