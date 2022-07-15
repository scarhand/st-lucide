import { newSpecPage } from '@stencil/core/testing';
import { IconFlipVertical } from '../flip-vertical';
import { createElement, FlipVertical }  from 'lucide';

describe('icon-flip-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical],
      html: `<icon-flip-vertical></icon-flip-vertical>`,
    });

    const svg = createElement(FlipVertical);

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flip-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical],
      html: `<icon-flip-vertical stroke="blue"></icon-flip-vertical>`,
    });

    const svg = createElement(FlipVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flip-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlipVertical],
      html: `<icon-flip-vertical stroke-width="2"></icon-flip-vertical>`,
    });

    const svg = createElement(FlipVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flip-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flip-vertical>
    `);
  });
});
