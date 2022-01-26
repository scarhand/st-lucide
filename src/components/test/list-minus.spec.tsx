import { newSpecPage } from '@stencil/core/testing';
import { IconListMinus } from '../list-minus';
import { createElement, ListMinus }  from 'lucide';

describe('icon-list-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListMinus],
      html: `<icon-list-minus></icon-list-minus>`,
    });

    const svg = createElement(ListMinus);

    expect(page.root).toEqualHtml(`
      <icon-list-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListMinus],
      html: `<icon-list-minus stroke="blue"></icon-list-minus>`,
    });

    const svg = createElement(ListMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListMinus],
      html: `<icon-list-minus stroke-width="2"></icon-list-minus>`,
    });

    const svg = createElement(ListMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-minus>
    `);
  });
});
