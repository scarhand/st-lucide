import { newSpecPage } from '@stencil/core/testing';
import { IconBuilding2 } from '../building-2';
import { createElement, Building2 }  from 'lucide';

describe('icon-building-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBuilding2],
      html: `<icon-building-2></icon-building-2>`,
    });

    const svg = createElement(Building2);

    expect(page.root).toEqualHtml(`
      <icon-building-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-building-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBuilding2],
      html: `<icon-building-2 stroke="blue"></icon-building-2>`,
    });

    const svg = createElement(Building2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-building-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-building-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBuilding2],
      html: `<icon-building-2 stroke-width="2"></icon-building-2>`,
    });

    const svg = createElement(Building2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-building-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-building-2>
    `);
  });
});
