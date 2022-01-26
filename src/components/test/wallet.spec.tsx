import { newSpecPage } from '@stencil/core/testing';
import { IconWallet } from '../wallet';
import { createElement, Wallet }  from 'lucide';

describe('icon-wallet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWallet],
      html: `<icon-wallet></icon-wallet>`,
    });

    const svg = createElement(Wallet);

    expect(page.root).toEqualHtml(`
      <icon-wallet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-wallet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWallet],
      html: `<icon-wallet stroke="blue"></icon-wallet>`,
    });

    const svg = createElement(Wallet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-wallet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-wallet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWallet],
      html: `<icon-wallet stroke-width="2"></icon-wallet>`,
    });

    const svg = createElement(Wallet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-wallet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-wallet>
    `);
  });
});
