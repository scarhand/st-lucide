import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalDistributeCenter } from '../align-horizontal-distribute-center';
import { createElement, AlignHorizontalDistributeCenter }  from 'lucide';

describe('icon-align-horizontal-distribute-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeCenter],
      html: `<icon-align-horizontal-distribute-center></icon-align-horizontal-distribute-center>`,
    });

    const svg = createElement(AlignHorizontalDistributeCenter);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-center>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeCenter],
      html: `<icon-align-horizontal-distribute-center stroke="blue"></icon-align-horizontal-distribute-center>`,
    });

    const svg = createElement(AlignHorizontalDistributeCenter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-center>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalDistributeCenter],
      html: `<icon-align-horizontal-distribute-center stroke-width="2"></icon-align-horizontal-distribute-center>`,
    });

    const svg = createElement(AlignHorizontalDistributeCenter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-distribute-center>
    `);
  });
});
