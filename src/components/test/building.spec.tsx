import { newSpecPage } from '@stencil/core/testing';
import { IconBuilding } from '../building';
import { createElement, Building }  from 'lucide';

describe('icon-building', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBuilding],
      html: `<icon-building></icon-building>`,
    });

    const svg = createElement(Building);

    expect(page.root).toEqualHtml(`
      <icon-building class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-building>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBuilding],
      html: `<icon-building stroke="blue"></icon-building>`,
    });

    const svg = createElement(Building);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-building class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-building>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBuilding],
      html: `<icon-building stroke-width="2"></icon-building>`,
    });

    const svg = createElement(Building);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-building class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-building>
    `);
  });
});
