import { newSpecPage } from '@stencil/core/testing';
import { IconAlignCenterVertical } from '../align-center-vertical';
import { createElement, AlignCenterVertical }  from 'lucide';

describe('icon-align-center-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterVertical],
      html: `<icon-align-center-vertical></icon-align-center-vertical>`,
    });

    const svg = createElement(AlignCenterVertical);

    expect(page.root).toEqualHtml(`
      <icon-align-center-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-center-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterVertical],
      html: `<icon-align-center-vertical stroke="blue"></icon-align-center-vertical>`,
    });

    const svg = createElement(AlignCenterVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-center-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-center-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterVertical],
      html: `<icon-align-center-vertical stroke-width="2"></icon-align-center-vertical>`,
    });

    const svg = createElement(AlignCenterVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-center-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-center-vertical>
    `);
  });
});
