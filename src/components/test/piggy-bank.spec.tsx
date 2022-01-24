import { newSpecPage } from '@stencil/core/testing';
import { IconPiggyBank } from '../piggy-bank';
import { createElement, PiggyBank }  from 'lucide';

describe('icon-piggy-bank', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPiggyBank],
      html: `<icon-piggy-bank></icon-piggy-bank>`,
    });

    const svg = createElement(PiggyBank);

    expect(page.root).toEqualHtml(`
      <icon-piggy-bank class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-piggy-bank>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPiggyBank],
      html: `<icon-piggy-bank stroke="blue"></icon-piggy-bank>`,
    });

    const svg = createElement(PiggyBank);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-piggy-bank class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-piggy-bank>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPiggyBank],
      html: `<icon-piggy-bank stroke-width="2"></icon-piggy-bank>`,
    });

    const svg = createElement(PiggyBank);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-piggy-bank class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-piggy-bank>
    `);
  });
});
