import { newSpecPage } from '@stencil/core/testing';
import { IconLayoutDashboard } from '../layout-dashboard';
import { createElement, LayoutDashboard }  from 'lucide';

describe('icon-layout-dashboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayoutDashboard],
      html: `<icon-layout-dashboard></icon-layout-dashboard>`,
    });

    const svg = createElement(LayoutDashboard);

    expect(page.root).toEqualHtml(`
      <icon-layout-dashboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layout-dashboard>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutDashboard],
      html: `<icon-layout-dashboard stroke="blue"></icon-layout-dashboard>`,
    });

    const svg = createElement(LayoutDashboard);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layout-dashboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layout-dashboard>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutDashboard],
      html: `<icon-layout-dashboard stroke-width="2"></icon-layout-dashboard>`,
    });

    const svg = createElement(LayoutDashboard);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layout-dashboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layout-dashboard>
    `);
  });
});
