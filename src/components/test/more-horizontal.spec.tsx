import { newSpecPage } from '@stencil/core/testing';
import { IconMoreHorizontal } from '../more-horizontal';
import { createElement, MoreHorizontal }  from 'lucide';

describe('icon-more-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoreHorizontal],
      html: `<icon-more-horizontal></icon-more-horizontal>`,
    });

    const svg = createElement(MoreHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-more-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-more-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoreHorizontal],
      html: `<icon-more-horizontal stroke="blue"></icon-more-horizontal>`,
    });

    const svg = createElement(MoreHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-more-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-more-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoreHorizontal],
      html: `<icon-more-horizontal stroke-width="2"></icon-more-horizontal>`,
    });

    const svg = createElement(MoreHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-more-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-more-horizontal>
    `);
  });
});
