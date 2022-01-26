import { newSpecPage } from '@stencil/core/testing';
import { IconTruck } from '../truck';
import { createElement, Truck }  from 'lucide';

describe('icon-truck', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTruck],
      html: `<icon-truck></icon-truck>`,
    });

    const svg = createElement(Truck);

    expect(page.root).toEqualHtml(`
      <icon-truck class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-truck>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTruck],
      html: `<icon-truck stroke="blue"></icon-truck>`,
    });

    const svg = createElement(Truck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-truck class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-truck>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTruck],
      html: `<icon-truck stroke-width="2"></icon-truck>`,
    });

    const svg = createElement(Truck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-truck class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-truck>
    `);
  });
});
