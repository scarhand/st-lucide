import { newSpecPage } from '@stencil/core/testing';
import { IconRotate3d } from '../rotate-3d';
import { createElement, Rotate3d }  from 'lucide';

describe('icon-rotate-3d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRotate3d],
      html: `<icon-rotate-3d></icon-rotate-3d>`,
    });

    const svg = createElement(Rotate3d);

    expect(page.root).toEqualHtml(`
      <icon-rotate-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rotate-3d>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotate3d],
      html: `<icon-rotate-3d stroke="blue"></icon-rotate-3d>`,
    });

    const svg = createElement(Rotate3d);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rotate-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rotate-3d>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotate3d],
      html: `<icon-rotate-3d stroke-width="2"></icon-rotate-3d>`,
    });

    const svg = createElement(Rotate3d);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rotate-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rotate-3d>
    `);
  });
});
