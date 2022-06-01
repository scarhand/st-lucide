import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalSpaceBetween } from '../align-vertical-space-between';
import { createElement, AlignVerticalSpaceBetween }  from 'lucide';

describe('icon-align-vertical-space-between', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceBetween],
      html: `<icon-align-vertical-space-between></icon-align-vertical-space-between>`,
    });

    const svg = createElement(AlignVerticalSpaceBetween);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-space-between>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceBetween],
      html: `<icon-align-vertical-space-between stroke="blue"></icon-align-vertical-space-between>`,
    });

    const svg = createElement(AlignVerticalSpaceBetween);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-space-between>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalSpaceBetween],
      html: `<icon-align-vertical-space-between stroke-width="2"></icon-align-vertical-space-between>`,
    });

    const svg = createElement(AlignVerticalSpaceBetween);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-space-between class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-space-between>
    `);
  });
});
