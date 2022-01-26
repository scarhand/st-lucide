import { newSpecPage } from '@stencil/core/testing';
import { IconCurrency } from '../currency';
import { createElement, Currency }  from 'lucide';

describe('icon-currency', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCurrency],
      html: `<icon-currency></icon-currency>`,
    });

    const svg = createElement(Currency);

    expect(page.root).toEqualHtml(`
      <icon-currency class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-currency>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCurrency],
      html: `<icon-currency stroke="blue"></icon-currency>`,
    });

    const svg = createElement(Currency);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-currency class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-currency>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCurrency],
      html: `<icon-currency stroke-width="2"></icon-currency>`,
    });

    const svg = createElement(Currency);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-currency class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-currency>
    `);
  });
});
