import { newSpecPage } from '@stencil/core/testing';
import { IconList } from '../list';
import { createElement, List }  from 'lucide';

describe('icon-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconList],
      html: `<icon-list></icon-list>`,
    });

    const svg = createElement(List);

    expect(page.root).toEqualHtml(`
      <icon-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconList],
      html: `<icon-list stroke="blue"></icon-list>`,
    });

    const svg = createElement(List);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconList],
      html: `<icon-list stroke-width="2"></icon-list>`,
    });

    const svg = createElement(List);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list>
    `);
  });
});
