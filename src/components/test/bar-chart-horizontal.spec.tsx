import { newSpecPage } from '@stencil/core/testing';
import { IconBarChartHorizontal } from '../bar-chart-horizontal';
import { createElement, BarChartHorizontal }  from 'lucide';

describe('icon-bar-chart-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBarChartHorizontal],
      html: `<icon-bar-chart-horizontal></icon-bar-chart-horizontal>`,
    });

    const svg = createElement(BarChartHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bar-chart-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChartHorizontal],
      html: `<icon-bar-chart-horizontal stroke="blue"></icon-bar-chart-horizontal>`,
    });

    const svg = createElement(BarChartHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bar-chart-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChartHorizontal],
      html: `<icon-bar-chart-horizontal stroke-width="2"></icon-bar-chart-horizontal>`,
    });

    const svg = createElement(BarChartHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bar-chart-horizontal>
    `);
  });
});
