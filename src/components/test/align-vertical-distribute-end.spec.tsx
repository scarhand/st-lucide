import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalDistributeEnd } from '../align-vertical-distribute-end';
import { createElement, AlignVerticalDistributeEnd }  from 'lucide';

describe('icon-align-vertical-distribute-end', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeEnd],
      html: `<icon-align-vertical-distribute-end></icon-align-vertical-distribute-end>`,
    });

    const svg = createElement(AlignVerticalDistributeEnd);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-end>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeEnd],
      html: `<icon-align-vertical-distribute-end stroke="blue"></icon-align-vertical-distribute-end>`,
    });

    const svg = createElement(AlignVerticalDistributeEnd);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-end>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeEnd],
      html: `<icon-align-vertical-distribute-end stroke-width="2"></icon-align-vertical-distribute-end>`,
    });

    const svg = createElement(AlignVerticalDistributeEnd);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-end>
    `);
  });
});
