import { newSpecPage } from '@stencil/core/testing';
import { IconTreeDeciduous } from '../tree-deciduous';
import { createElement, TreeDeciduous }  from 'lucide';

describe('icon-tree-deciduous', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTreeDeciduous],
      html: `<icon-tree-deciduous></icon-tree-deciduous>`,
    });

    const svg = createElement(TreeDeciduous);

    expect(page.root).toEqualHtml(`
      <icon-tree-deciduous class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tree-deciduous>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTreeDeciduous],
      html: `<icon-tree-deciduous stroke="blue"></icon-tree-deciduous>`,
    });

    const svg = createElement(TreeDeciduous);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tree-deciduous class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tree-deciduous>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTreeDeciduous],
      html: `<icon-tree-deciduous stroke-width="2"></icon-tree-deciduous>`,
    });

    const svg = createElement(TreeDeciduous);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tree-deciduous class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tree-deciduous>
    `);
  });
});
