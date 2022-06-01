import { newSpecPage } from '@stencil/core/testing';
import { IconSlidersHorizontal } from '../sliders-horizontal';
import { createElement, SlidersHorizontal }  from 'lucide';

describe('icon-sliders-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSlidersHorizontal],
      html: `<icon-sliders-horizontal></icon-sliders-horizontal>`,
    });

    const svg = createElement(SlidersHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-sliders-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sliders-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlidersHorizontal],
      html: `<icon-sliders-horizontal stroke="blue"></icon-sliders-horizontal>`,
    });

    const svg = createElement(SlidersHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sliders-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sliders-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSlidersHorizontal],
      html: `<icon-sliders-horizontal stroke-width="2"></icon-sliders-horizontal>`,
    });

    const svg = createElement(SlidersHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sliders-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sliders-horizontal>
    `);
  });
});
