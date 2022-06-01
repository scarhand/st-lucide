import { newSpecPage } from '@stencil/core/testing';
import { IconBarChart4 } from '../bar-chart-4';
import { createElement, BarChart4 }  from 'lucide';

describe('icon-bar-chart-4', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBarChart4],
      html: `<icon-bar-chart-4></icon-bar-chart-4>`,
    });

    const svg = createElement(BarChart4);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bar-chart-4>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart4],
      html: `<icon-bar-chart-4 stroke="blue"></icon-bar-chart-4>`,
    });

    const svg = createElement(BarChart4);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bar-chart-4>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBarChart4],
      html: `<icon-bar-chart-4 stroke-width="2"></icon-bar-chart-4>`,
    });

    const svg = createElement(BarChart4);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bar-chart-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bar-chart-4>
    `);
  });
});
