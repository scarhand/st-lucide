import { newSpecPage } from '@stencil/core/testing';
import { IconBarChart } from '../bar-chart';
import { createElement, BarChart }  from 'lucide';

describe('icon-bar-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBarChart],
      html: `<icon-bar-chart></icon-bar-chart>`,
    });

    const svg = createElement(BarChart);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bar-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart],
      html: `<icon-bar-chart stroke="blue"></icon-bar-chart>`,
    });

    const svg = createElement(BarChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bar-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart],
      html: `<icon-bar-chart stroke-width="2"></icon-bar-chart>`,
    });

    const svg = createElement(BarChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bar-chart>
    `);
  });
});
