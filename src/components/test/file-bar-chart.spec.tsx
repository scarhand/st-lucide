import { newSpecPage } from '@stencil/core/testing';
import { IconFileBarChart } from '../file-bar-chart';
import { createElement, FileBarChart }  from 'lucide';

describe('icon-file-bar-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart],
      html: `<icon-file-bar-chart></icon-file-bar-chart>`,
    });

    const svg = createElement(FileBarChart);

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-bar-chart>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart],
      html: `<icon-file-bar-chart stroke="blue"></icon-file-bar-chart>`,
    });

    const svg = createElement(FileBarChart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-bar-chart>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart],
      html: `<icon-file-bar-chart stroke-width="2"></icon-file-bar-chart>`,
    });

    const svg = createElement(FileBarChart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-bar-chart>
    `);
  });
});
