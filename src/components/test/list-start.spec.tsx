import { newSpecPage } from '@stencil/core/testing';
import { IconListStart } from '../list-start';
import { createElement, ListStart }  from 'lucide';

describe('icon-list-start', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListStart],
      html: `<icon-list-start></icon-list-start>`,
    });

    const svg = createElement(ListStart);

    expect(page.root).toEqualHtml(`
      <icon-list-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-start>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListStart],
      html: `<icon-list-start stroke="blue"></icon-list-start>`,
    });

    const svg = createElement(ListStart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-start>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListStart],
      html: `<icon-list-start stroke-width="2"></icon-list-start>`,
    });

    const svg = createElement(ListStart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-start>
    `);
  });
});
