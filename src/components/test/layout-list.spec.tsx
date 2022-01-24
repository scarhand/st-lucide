import { newSpecPage } from '@stencil/core/testing';
import { IconLayoutList } from '../layout-list';
import { createElement, LayoutList }  from 'lucide';

describe('icon-layout-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLayoutList],
      html: `<icon-layout-list></icon-layout-list>`,
    });

    const svg = createElement(LayoutList);

    expect(page.root).toEqualHtml(`
      <icon-layout-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-layout-list>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutList],
      html: `<icon-layout-list stroke="blue"></icon-layout-list>`,
    });

    const svg = createElement(LayoutList);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-layout-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-layout-list>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLayoutList],
      html: `<icon-layout-list stroke-width="2"></icon-layout-list>`,
    });

    const svg = createElement(LayoutList);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-layout-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-layout-list>
    `);
  });
});
