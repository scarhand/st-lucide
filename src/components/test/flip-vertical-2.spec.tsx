import { newSpecPage } from '@stencil/core/testing';
import { IconFlipVertical2 } from '../flip-vertical-2';
import { createElement, FlipVertical2 }  from 'lucide';

describe('icon-flip-vertical-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical2],
      html: `<icon-flip-vertical-2></icon-flip-vertical-2>`,
    });

    const svg = createElement(FlipVertical2);

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flip-vertical-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical2],
      html: `<icon-flip-vertical-2 stroke="blue"></icon-flip-vertical-2>`,
    });

    const svg = createElement(FlipVertical2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flip-vertical-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical2],
      html: `<icon-flip-vertical-2 stroke-width="2"></icon-flip-vertical-2>`,
    });

    const svg = createElement(FlipVertical2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flip-vertical-2>
    `);
  });
});
