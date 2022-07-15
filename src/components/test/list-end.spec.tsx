import { newSpecPage } from '@stencil/core/testing';
import { IconListEnd } from '../list-end';
import { createElement, ListEnd }  from 'lucide';

describe('icon-list-end', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListEnd],
      html: `<icon-list-end></icon-list-end>`,
    });

    const svg = createElement(ListEnd);

    expect(page.root).toEqualHtml(`
      <icon-list-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-end>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListEnd],
      html: `<icon-list-end stroke="blue"></icon-list-end>`,
    });

    const svg = createElement(ListEnd);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-end>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListEnd],
      html: `<icon-list-end stroke-width="2"></icon-list-end>`,
    });

    const svg = createElement(ListEnd);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-end>
    `);
  });
});
