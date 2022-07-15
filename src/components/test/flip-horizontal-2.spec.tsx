import { newSpecPage } from '@stencil/core/testing';
import { IconFlipHorizontal2 } from '../flip-horizontal-2';
import { createElement, FlipHorizontal2 }  from 'lucide';

describe('icon-flip-horizontal-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal2],
      html: `<icon-flip-horizontal-2></icon-flip-horizontal-2>`,
    });

    const svg = createElement(FlipHorizontal2);

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flip-horizontal-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal2],
      html: `<icon-flip-horizontal-2 stroke="blue"></icon-flip-horizontal-2>`,
    });

    const svg = createElement(FlipHorizontal2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flip-horizontal-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipHorizontal2],
      html: `<icon-flip-horizontal-2 stroke-width="2"></icon-flip-horizontal-2>`,
    });

    const svg = createElement(FlipHorizontal2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flip-horizontal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flip-horizontal-2>
    `);
  });
});
