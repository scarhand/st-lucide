import { newSpecPage } from '@stencil/core/testing';
import { IconScale3d } from '../scale-3d';
import { createElement, Scale3d }  from 'lucide';

describe('icon-scale-3d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScale3d],
      html: `<icon-scale-3d></icon-scale-3d>`,
    });

    const svg = createElement(Scale3d);

    expect(page.root).toEqualHtml(`
      <icon-scale-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scale-3d>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScale3d],
      html: `<icon-scale-3d stroke="blue"></icon-scale-3d>`,
    });

    const svg = createElement(Scale3d);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scale-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scale-3d>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScale3d],
      html: `<icon-scale-3d stroke-width="2"></icon-scale-3d>`,
    });

    const svg = createElement(Scale3d);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scale-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scale-3d>
    `);
  });
});
