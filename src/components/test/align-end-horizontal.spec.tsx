import { newSpecPage } from '@stencil/core/testing';
import { IconAlignEndHorizontal } from '../align-end-horizontal';
import { createElement, AlignEndHorizontal }  from 'lucide';

describe('icon-align-end-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndHorizontal],
      html: `<icon-align-end-horizontal></icon-align-end-horizontal>`,
    });

    const svg = createElement(AlignEndHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-align-end-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-end-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndHorizontal],
      html: `<icon-align-end-horizontal stroke="blue"></icon-align-end-horizontal>`,
    });

    const svg = createElement(AlignEndHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-end-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-end-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndHorizontal],
      html: `<icon-align-end-horizontal stroke-width="2"></icon-align-end-horizontal>`,
    });

    const svg = createElement(AlignEndHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-end-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-end-horizontal>
    `);
  });
});
