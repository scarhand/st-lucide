import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalSpaceAround } from '../align-horizontal-space-around';
import { createElement, AlignHorizontalSpaceAround }  from 'lucide';

describe('icon-align-horizontal-space-around', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceAround],
      html: `<icon-align-horizontal-space-around></icon-align-horizontal-space-around>`,
    });

    const svg = createElement(AlignHorizontalSpaceAround);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-space-around>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceAround],
      html: `<icon-align-horizontal-space-around stroke="blue"></icon-align-horizontal-space-around>`,
    });

    const svg = createElement(AlignHorizontalSpaceAround);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-space-around>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceAround],
      html: `<icon-align-horizontal-space-around stroke-width="2"></icon-align-horizontal-space-around>`,
    });

    const svg = createElement(AlignHorizontalSpaceAround);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-around class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-space-around>
    `);
  });
});
