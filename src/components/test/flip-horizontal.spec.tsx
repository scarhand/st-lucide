import { newSpecPage } from '@stencil/core/testing';
import { IconFlipHorizontal } from '../flip-horizontal';
import { createElement, FlipHorizontal }  from 'lucide';

describe('icon-flip-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal],
      html: `<icon-flip-horizontal></icon-flip-horizontal>`,
    });

    const svg = createElement(FlipHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flip-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal],
      html: `<icon-flip-horizontal stroke="blue"></icon-flip-horizontal>`,
    });

    const svg = createElement(FlipHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flip-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal],
      html: `<icon-flip-horizontal stroke-width="2"></icon-flip-horizontal>`,
    });

    const svg = createElement(FlipHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flip-horizontal>
    `);
  });
});
