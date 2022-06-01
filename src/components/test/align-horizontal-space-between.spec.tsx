import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalSpaceBetween } from '../align-horizontal-space-between';
import { createElement, AlignHorizontalSpaceBetween }  from 'lucide';

describe('icon-align-horizontal-space-between', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceBetween],
      html: `<icon-align-horizontal-space-between></icon-align-horizontal-space-between>`,
    });

    const svg = createElement(AlignHorizontalSpaceBetween);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-space-between>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceBetween],
      html: `<icon-align-horizontal-space-between stroke="blue"></icon-align-horizontal-space-between>`,
    });

    const svg = createElement(AlignHorizontalSpaceBetween);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-space-between>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalSpaceBetween],
      html: `<icon-align-horizontal-space-between stroke-width="2"></icon-align-horizontal-space-between>`,
    });

    const svg = createElement(AlignHorizontalSpaceBetween);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-space-between>
    `);
  });
});
