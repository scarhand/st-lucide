import { newSpecPage } from '@stencil/core/testing';
import { IconTreePine } from '../tree-pine';
import { createElement, TreePine }  from 'lucide';

describe('icon-tree-pine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTreePine],
      html: `<icon-tree-pine></icon-tree-pine>`,
    });

    const svg = createElement(TreePine);

    expect(page.root).toEqualHtml(`
      <icon-tree-pine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tree-pine>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTreePine],
      html: `<icon-tree-pine stroke="blue"></icon-tree-pine>`,
    });

    const svg = createElement(TreePine);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tree-pine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tree-pine>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTreePine],
      html: `<icon-tree-pine stroke-width="2"></icon-tree-pine>`,
    });

    const svg = createElement(TreePine);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tree-pine class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tree-pine>
    `);
  });
});
