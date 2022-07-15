import { newSpecPage } from '@stencil/core/testing';
import { IconMove3d } from '../move-3d';
import { createElement, Move3d }  from 'lucide';

describe('icon-move-3d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMove3d],
      html: `<icon-move-3d></icon-move-3d>`,
    });

    const svg = createElement(Move3d);

    expect(page.root).toEqualHtml(`
      <icon-move-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move-3d>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMove3d],
      html: `<icon-move-3d stroke="blue"></icon-move-3d>`,
    });

    const svg = createElement(Move3d);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move-3d>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMove3d],
      html: `<icon-move-3d stroke-width="2"></icon-move-3d>`,
    });

    const svg = createElement(Move3d);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move-3d class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move-3d>
    `);
  });
});
