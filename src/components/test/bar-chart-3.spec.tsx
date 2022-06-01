import { newSpecPage } from '@stencil/core/testing';
import { IconBarChart3 } from '../bar-chart-3';
import { createElement, BarChart3 }  from 'lucide';

describe('icon-bar-chart-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBarChart3],
      html: `<icon-bar-chart-3></icon-bar-chart-3>`,
    });

    const svg = createElement(BarChart3);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bar-chart-3>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart3],
      html: `<icon-bar-chart-3 stroke="blue"></icon-bar-chart-3>`,
    });

    const svg = createElement(BarChart3);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bar-chart-3>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart3],
      html: `<icon-bar-chart-3 stroke-width="2"></icon-bar-chart-3>`,
    });

    const svg = createElement(BarChart3);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bar-chart-3>
    `);
  });
});
