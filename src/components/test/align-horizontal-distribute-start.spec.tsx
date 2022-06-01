import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalDistributeStart } from '../align-horizontal-distribute-start';
import { createElement, AlignHorizontalDistributeStart }  from 'lucide';

describe('icon-align-horizontal-distribute-start', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeStart],
      html: `<icon-align-horizontal-distribute-start></icon-align-horizontal-distribute-start>`,
    });

    const svg = createElement(AlignHorizontalDistributeStart);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-start>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeStart],
      html: `<icon-align-horizontal-distribute-start stroke="blue"></icon-align-horizontal-distribute-start>`,
    });

    const svg = createElement(AlignHorizontalDistributeStart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-start>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeStart],
      html: `<icon-align-horizontal-distribute-start stroke-width="2"></icon-align-horizontal-distribute-start>`,
    });

    const svg = createElement(AlignHorizontalDistributeStart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-start>
    `);
  });
});
