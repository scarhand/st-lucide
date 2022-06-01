import { newSpecPage } from '@stencil/core/testing';
import { IconAlignEndVertical } from '../align-end-vertical';
import { createElement, AlignEndVertical }  from 'lucide';

describe('icon-align-end-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndVertical],
      html: `<icon-align-end-vertical></icon-align-end-vertical>`,
    });

    const svg = createElement(AlignEndVertical);

    expect(page.root).toEqualHtml(`
      <icon-align-end-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-end-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndVertical],
      html: `<icon-align-end-vertical stroke="blue"></icon-align-end-vertical>`,
    });

    const svg = createElement(AlignEndVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-end-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-end-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignEndVertical],
      html: `<icon-align-end-vertical stroke-width="2"></icon-align-end-vertical>`,
    });

    const svg = createElement(AlignEndVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-end-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-end-vertical>
    `);
  });
});
