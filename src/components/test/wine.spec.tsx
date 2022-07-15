import { newSpecPage } from '@stencil/core/testing';
import { IconWine } from '../wine';
import { createElement, Wine }  from 'lucide';

describe('icon-wine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWine],
      html: `<icon-wine></icon-wine>`,
    });

    const svg = createElement(Wine);

    expect(page.root).toEqualHtml(`
      <icon-wine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wine>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWine],
      html: `<icon-wine stroke="blue"></icon-wine>`,
    });

    const svg = createElement(Wine);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wine>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWine],
      html: `<icon-wine stroke-width="2"></icon-wine>`,
    });

    const svg = createElement(Wine);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wine>
    `);
  });
});
