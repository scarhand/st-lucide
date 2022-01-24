import { newSpecPage } from '@stencil/core/testing';
import { IconEgg } from '../egg';
import { createElement, Egg }  from 'lucide';

describe('icon-egg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEgg],
      html: `<icon-egg></icon-egg>`,
    });

    const svg = createElement(Egg);

    expect(page.root).toEqualHtml(`
      <icon-egg class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-egg>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEgg],
      html: `<icon-egg stroke="blue"></icon-egg>`,
    });

    const svg = createElement(Egg);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-egg class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-egg>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEgg],
      html: `<icon-egg stroke-width="2"></icon-egg>`,
    });

    const svg = createElement(Egg);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-egg class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-egg>
    `);
  });
});
