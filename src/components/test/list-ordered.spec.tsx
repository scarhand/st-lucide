import { newSpecPage } from '@stencil/core/testing';
import { IconListOrdered } from '../list-ordered';
import { createElement, ListOrdered }  from 'lucide';

describe('icon-list-ordered', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListOrdered],
      html: `<icon-list-ordered></icon-list-ordered>`,
    });

    const svg = createElement(ListOrdered);

    expect(page.root).toEqualHtml(`
      <icon-list-ordered class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-ordered>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListOrdered],
      html: `<icon-list-ordered stroke="blue"></icon-list-ordered>`,
    });

    const svg = createElement(ListOrdered);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-ordered class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-ordered>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListOrdered],
      html: `<icon-list-ordered stroke-width="2"></icon-list-ordered>`,
    });

    const svg = createElement(ListOrdered);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-ordered class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-ordered>
    `);
  });
});
