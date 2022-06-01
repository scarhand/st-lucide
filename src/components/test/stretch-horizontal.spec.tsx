import { newSpecPage } from '@stencil/core/testing';
import { IconStretchHorizontal } from '../stretch-horizontal';
import { createElement, StretchHorizontal }  from 'lucide';

describe('icon-stretch-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStretchHorizontal],
      html: `<icon-stretch-horizontal></icon-stretch-horizontal>`,
    });

    const svg = createElement(StretchHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-stretch-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-stretch-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStretchHorizontal],
      html: `<icon-stretch-horizontal stroke="blue"></icon-stretch-horizontal>`,
    });

    const svg = createElement(StretchHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-stretch-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-stretch-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStretchHorizontal],
      html: `<icon-stretch-horizontal stroke-width="2"></icon-stretch-horizontal>`,
    });

    const svg = createElement(StretchHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-stretch-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-stretch-horizontal>
    `);
  });
});
