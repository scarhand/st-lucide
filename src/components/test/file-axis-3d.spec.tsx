import { newSpecPage } from '@stencil/core/testing';
import { IconFileAxis3d } from '../file-axis-3d';
import { createElement, FileAxis3d }  from 'lucide';

describe('icon-file-axis-3d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileAxis3d],
      html: `<icon-file-axis-3d></icon-file-axis-3d>`,
    });

    const svg = createElement(FileAxis3d);

    expect(page.root).toEqualHtml(`
      <icon-file-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-axis-3d>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAxis3d],
      html: `<icon-file-axis-3d stroke="blue"></icon-file-axis-3d>`,
    });

    const svg = createElement(FileAxis3d);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-axis-3d>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAxis3d],
      html: `<icon-file-axis-3d stroke-width="2"></icon-file-axis-3d>`,
    });

    const svg = createElement(FileAxis3d);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-axis-3d>
    `);
  });
});
