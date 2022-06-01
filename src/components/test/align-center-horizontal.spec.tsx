import { newSpecPage } from '@stencil/core/testing';
import { IconAlignCenterHorizontal } from '../align-center-horizontal';
import { createElement, AlignCenterHorizontal }  from 'lucide';

describe('icon-align-center-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterHorizontal],
      html: `<icon-align-center-horizontal></icon-align-center-horizontal>`,
    });

    const svg = createElement(AlignCenterHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-align-center-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-center-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterHorizontal],
      html: `<icon-align-center-horizontal stroke="blue"></icon-align-center-horizontal>`,
    });

    const svg = createElement(AlignCenterHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-center-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-center-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignCenterHorizontal],
      html: `<icon-align-center-horizontal stroke-width="2"></icon-align-center-horizontal>`,
    });

    const svg = createElement(AlignCenterHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-center-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-center-horizontal>
    `);
  });
});
