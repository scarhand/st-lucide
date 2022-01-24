import { newSpecPage } from '@stencil/core/testing';
import { IconBarChart2 } from '../bar-chart-2';
import { createElement, BarChart2 }  from 'lucide';

describe('icon-bar-chart-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBarChart2],
      html: `<icon-bar-chart-2></icon-bar-chart-2>`,
    });

    const svg = createElement(BarChart2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bar-chart-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart2],
      html: `<icon-bar-chart-2 stroke="blue"></icon-bar-chart-2>`,
    });

    const svg = createElement(BarChart2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bar-chart-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart2],
      html: `<icon-bar-chart-2 stroke-width="2"></icon-bar-chart-2>`,
    });

    const svg = createElement(BarChart2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bar-chart-2>
    `);
  });
});
