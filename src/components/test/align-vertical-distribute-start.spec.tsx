import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalDistributeStart } from '../align-vertical-distribute-start';
import { createElement, AlignVerticalDistributeStart }  from 'lucide';

describe('icon-align-vertical-distribute-start', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeStart],
      html: `<icon-align-vertical-distribute-start></icon-align-vertical-distribute-start>`,
    });

    const svg = createElement(AlignVerticalDistributeStart);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-start>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeStart],
      html: `<icon-align-vertical-distribute-start stroke="blue"></icon-align-vertical-distribute-start>`,
    });

    const svg = createElement(AlignVerticalDistributeStart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-start>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalDistributeStart],
      html: `<icon-align-vertical-distribute-start stroke-width="2"></icon-align-vertical-distribute-start>`,
    });

    const svg = createElement(AlignVerticalDistributeStart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-distribute-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-distribute-start>
    `);
  });
});
