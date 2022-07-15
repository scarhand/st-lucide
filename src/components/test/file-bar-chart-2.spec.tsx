import { newSpecPage } from '@stencil/core/testing';
import { IconFileBarChart2 } from '../file-bar-chart-2';
import { createElement, FileBarChart2 }  from 'lucide';

describe('icon-file-bar-chart-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart2],
      html: `<icon-file-bar-chart-2></icon-file-bar-chart-2>`,
    });

    const svg = createElement(FileBarChart2);

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-bar-chart-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart2],
      html: `<icon-file-bar-chart-2 stroke="blue"></icon-file-bar-chart-2>`,
    });

    const svg = createElement(FileBarChart2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-bar-chart-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileBarChart2],
      html: `<icon-file-bar-chart-2 stroke-width="2"></icon-file-bar-chart-2>`,
    });

    const svg = createElement(FileBarChart2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-bar-chart-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-bar-chart-2>
    `);
  });
});
