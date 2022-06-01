import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalDistributeCenter } from '../align-vertical-distribute-center';
import { createElement, AlignVerticalDistributeCenter }  from 'lucide';

describe('icon-align-vertical-distribute-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeCenter],
      html: `<icon-align-vertical-distribute-center></icon-align-vertical-distribute-center>`,
    });

    const svg = createElement(AlignVerticalDistributeCenter);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-center>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeCenter],
      html: `<icon-align-vertical-distribute-center stroke="blue"></icon-align-vertical-distribute-center>`,
    });

    const svg = createElement(AlignVerticalDistributeCenter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-center>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeCenter],
      html: `<icon-align-vertical-distribute-center stroke-width="2"></icon-align-vertical-distribute-center>`,
    });

    const svg = createElement(AlignVerticalDistributeCenter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-center>
    `);
  });
});
