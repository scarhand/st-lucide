import { newSpecPage } from '@stencil/core/testing';
import { IconLineChart } from '../line-chart';
import { createElement, LineChart }  from 'lucide';

describe('icon-line-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLineChart],
      html: `<icon-line-chart></icon-line-chart>`,
    });

    const svg = createElement(LineChart);

    expect(page.root).toEqualHtml(`
      <icon-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-line-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLineChart],
      html: `<icon-line-chart stroke="blue"></icon-line-chart>`,
    });

    const svg = createElement(LineChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-line-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLineChart],
      html: `<icon-line-chart stroke-width="2"></icon-line-chart>`,
    });

    const svg = createElement(LineChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-line-chart>
    `);
  });
});
