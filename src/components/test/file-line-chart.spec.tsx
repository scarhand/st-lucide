import { newSpecPage } from '@stencil/core/testing';
import { IconFileLineChart } from '../file-line-chart';
import { createElement, FileLineChart }  from 'lucide';

describe('icon-file-line-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileLineChart],
      html: `<icon-file-line-chart></icon-file-line-chart>`,
    });

    const svg = createElement(FileLineChart);

    expect(page.root).toEqualHtml(`
      <icon-file-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-line-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLineChart],
      html: `<icon-file-line-chart stroke="blue"></icon-file-line-chart>`,
    });

    const svg = createElement(FileLineChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-line-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLineChart],
      html: `<icon-file-line-chart stroke-width="2"></icon-file-line-chart>`,
    });

    const svg = createElement(FileLineChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-line-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-line-chart>
    `);
  });
});
