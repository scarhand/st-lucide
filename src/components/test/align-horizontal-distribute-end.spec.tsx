import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalDistributeEnd } from '../align-horizontal-distribute-end';
import { createElement, AlignHorizontalDistributeEnd }  from 'lucide';

describe('icon-align-horizontal-distribute-end', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeEnd],
      html: `<icon-align-horizontal-distribute-end></icon-align-horizontal-distribute-end>`,
    });

    const svg = createElement(AlignHorizontalDistributeEnd);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-end>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeEnd],
      html: `<icon-align-horizontal-distribute-end stroke="blue"></icon-align-horizontal-distribute-end>`,
    });

    const svg = createElement(AlignHorizontalDistributeEnd);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-end>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeEnd],
      html: `<icon-align-horizontal-distribute-end stroke-width="2"></icon-align-horizontal-distribute-end>`,
    });

    const svg = createElement(AlignHorizontalDistributeEnd);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-end>
    `);
  });
});
