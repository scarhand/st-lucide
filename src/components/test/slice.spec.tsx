import { newSpecPage } from '@stencil/core/testing';
import { IconSlice } from '../slice';
import { createElement, Slice }  from 'lucide';

describe('icon-slice', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSlice],
      html: `<icon-slice></icon-slice>`,
    });

    const svg = createElement(Slice);

    expect(page.root).toEqualHtml(`
      <icon-slice class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-slice>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlice],
      html: `<icon-slice stroke="blue"></icon-slice>`,
    });

    const svg = createElement(Slice);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-slice class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-slice>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlice],
      html: `<icon-slice stroke-width="2"></icon-slice>`,
    });

    const svg = createElement(Slice);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-slice class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-slice>
    `);
  });
});
