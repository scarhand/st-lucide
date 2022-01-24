import { newSpecPage } from '@stencil/core/testing';
import { IconGift } from '../gift';
import { createElement, Gift }  from 'lucide';

describe('icon-gift', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGift],
      html: `<icon-gift></icon-gift>`,
    });

    const svg = createElement(Gift);

    expect(page.root).toEqualHtml(`
      <icon-gift class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gift>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGift],
      html: `<icon-gift stroke="blue"></icon-gift>`,
    });

    const svg = createElement(Gift);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gift class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gift>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGift],
      html: `<icon-gift stroke-width="2"></icon-gift>`,
    });

    const svg = createElement(Gift);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gift class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gift>
    `);
  });
});
