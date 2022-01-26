import { newSpecPage } from '@stencil/core/testing';
import { IconListPlus } from '../list-plus';
import { createElement, ListPlus }  from 'lucide';

describe('icon-list-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListPlus],
      html: `<icon-list-plus></icon-list-plus>`,
    });

    const svg = createElement(ListPlus);

    expect(page.root).toEqualHtml(`
      <icon-list-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListPlus],
      html: `<icon-list-plus stroke="blue"></icon-list-plus>`,
    });

    const svg = createElement(ListPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListPlus],
      html: `<icon-list-plus stroke-width="2"></icon-list-plus>`,
    });

    const svg = createElement(ListPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-plus>
    `);
  });
});
