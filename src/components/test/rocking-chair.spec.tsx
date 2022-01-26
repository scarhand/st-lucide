import { newSpecPage } from '@stencil/core/testing';
import { IconRockingChair } from '../rocking-chair';
import { createElement, RockingChair }  from 'lucide';

describe('icon-rocking-chair', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRockingChair],
      html: `<icon-rocking-chair></icon-rocking-chair>`,
    });

    const svg = createElement(RockingChair);

    expect(page.root).toEqualHtml(`
      <icon-rocking-chair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rocking-chair>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRockingChair],
      html: `<icon-rocking-chair stroke="blue"></icon-rocking-chair>`,
    });

    const svg = createElement(RockingChair);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rocking-chair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rocking-chair>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRockingChair],
      html: `<icon-rocking-chair stroke-width="2"></icon-rocking-chair>`,
    });

    const svg = createElement(RockingChair);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rocking-chair class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rocking-chair>
    `);
  });
});
