import { newSpecPage } from '@stencil/core/testing';
import { IconCoins } from '../coins';
import { createElement, Coins }  from 'lucide';

describe('icon-coins', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCoins],
      html: `<icon-coins></icon-coins>`,
    });

    const svg = createElement(Coins);

    expect(page.root).toEqualHtml(`
      <icon-coins class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-coins>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCoins],
      html: `<icon-coins stroke="blue"></icon-coins>`,
    });

    const svg = createElement(Coins);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-coins class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-coins>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCoins],
      html: `<icon-coins stroke-width="2"></icon-coins>`,
    });

    const svg = createElement(Coins);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-coins class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-coins>
    `);
  });
});
