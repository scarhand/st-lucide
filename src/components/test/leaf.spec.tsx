import { newSpecPage } from '@stencil/core/testing';
import { IconLeaf } from '../leaf';
import { createElement, Leaf }  from 'lucide';

describe('icon-leaf', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLeaf],
      html: `<icon-leaf></icon-leaf>`,
    });

    const svg = createElement(Leaf);

    expect(page.root).toEqualHtml(`
      <icon-leaf class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-leaf>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLeaf],
      html: `<icon-leaf stroke="blue"></icon-leaf>`,
    });

    const svg = createElement(Leaf);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-leaf class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-leaf>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLeaf],
      html: `<icon-leaf stroke-width="2"></icon-leaf>`,
    });

    const svg = createElement(Leaf);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-leaf class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-leaf>
    `);
  });
});
