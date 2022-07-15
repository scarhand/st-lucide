import { newSpecPage } from '@stencil/core/testing';
import { IconFilePieChart } from '../file-pie-chart';
import { createElement, FilePieChart }  from 'lucide';

describe('icon-file-pie-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFilePieChart],
      html: `<icon-file-pie-chart></icon-file-pie-chart>`,
    });

    const svg = createElement(FilePieChart);

    expect(page.root).toEqualHtml(`
      <icon-file-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-pie-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePieChart],
      html: `<icon-file-pie-chart stroke="blue"></icon-file-pie-chart>`,
    });

    const svg = createElement(FilePieChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-pie-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePieChart],
      html: `<icon-file-pie-chart stroke-width="2"></icon-file-pie-chart>`,
    });

    const svg = createElement(FilePieChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-pie-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-pie-chart>
    `);
  });
});
