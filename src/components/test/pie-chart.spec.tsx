import { newSpecPage } from '@stencil/core/testing';
import { IconPieChart } from '../pie-chart';
import { createElement, PieChart }  from 'lucide';

describe('icon-pie-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPieChart],
      html: `<icon-pie-chart></icon-pie-chart>`,
    });

    const svg = createElement(PieChart);

    expect(page.root).toEqualHtml(`
      <icon-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pie-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPieChart],
      html: `<icon-pie-chart stroke="blue"></icon-pie-chart>`,
    });

    const svg = createElement(PieChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pie-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPieChart],
      html: `<icon-pie-chart stroke-width="2"></icon-pie-chart>`,
    });

    const svg = createElement(PieChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pie-chart>
    `);
  });
});
