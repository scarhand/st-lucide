import { newSpecPage } from '@stencil/core/testing';
import { IconCreditCard } from '../credit-card';
import { createElement, CreditCard }  from 'lucide';

describe('icon-credit-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCreditCard],
      html: `<icon-credit-card></icon-credit-card>`,
    });

    const svg = createElement(CreditCard);

    expect(page.root).toEqualHtml(`
      <icon-credit-card class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-credit-card>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCreditCard],
      html: `<icon-credit-card stroke="blue"></icon-credit-card>`,
    });

    const svg = createElement(CreditCard);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-credit-card class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-credit-card>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCreditCard],
      html: `<icon-credit-card stroke-width="2"></icon-credit-card>`,
    });

    const svg = createElement(CreditCard);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-credit-card class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-credit-card>
    `);
  });
});
