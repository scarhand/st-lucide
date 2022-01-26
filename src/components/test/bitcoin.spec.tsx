import { newSpecPage } from '@stencil/core/testing';
import { IconBitcoin } from '../bitcoin';
import { createElement, Bitcoin }  from 'lucide';

describe('icon-bitcoin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBitcoin],
      html: `<icon-bitcoin></icon-bitcoin>`,
    });

    const svg = createElement(Bitcoin);

    expect(page.root).toEqualHtml(`
      <icon-bitcoin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bitcoin>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBitcoin],
      html: `<icon-bitcoin stroke="blue"></icon-bitcoin>`,
    });

    const svg = createElement(Bitcoin);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bitcoin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bitcoin>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBitcoin],
      html: `<icon-bitcoin stroke-width="2"></icon-bitcoin>`,
    });

    const svg = createElement(Bitcoin);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bitcoin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bitcoin>
    `);
  });
});
