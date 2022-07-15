import { newSpecPage } from '@stencil/core/testing';
import { IconAxis3d } from '../axis-3d';
import { createElement, Axis3d }  from 'lucide';

describe('icon-axis-3d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAxis3d],
      html: `<icon-axis-3d></icon-axis-3d>`,
    });

    const svg = createElement(Axis3d);

    expect(page.root).toEqualHtml(`
      <icon-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-axis-3d>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAxis3d],
      html: `<icon-axis-3d stroke="blue"></icon-axis-3d>`,
    });

    const svg = createElement(Axis3d);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-axis-3d>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAxis3d],
      html: `<icon-axis-3d stroke-width="2"></icon-axis-3d>`,
    });

    const svg = createElement(Axis3d);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-axis-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-axis-3d>
    `);
  });
});
