import { newSpecPage } from '@stencil/core/testing';
import { IconListX } from '../list-x';
import { createElement, ListX }  from 'lucide';

describe('icon-list-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListX],
      html: `<icon-list-x></icon-list-x>`,
    });

    const svg = createElement(ListX);

    expect(page.root).toEqualHtml(`
      <icon-list-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListX],
      html: `<icon-list-x stroke="blue"></icon-list-x>`,
    });

    const svg = createElement(ListX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListX],
      html: `<icon-list-x stroke-width="2"></icon-list-x>`,
    });

    const svg = createElement(ListX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-x>
    `);
  });
});
