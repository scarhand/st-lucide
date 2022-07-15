import { newSpecPage } from '@stencil/core/testing';
import { IconBaggageClaim } from '../baggage-claim';
import { createElement, BaggageClaim }  from 'lucide';

describe('icon-baggage-claim', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBaggageClaim],
      html: `<icon-baggage-claim></icon-baggage-claim>`,
    });

    const svg = createElement(BaggageClaim);

    expect(page.root).toEqualHtml(`
      <icon-baggage-claim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-baggage-claim>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaggageClaim],
      html: `<icon-baggage-claim stroke="blue"></icon-baggage-claim>`,
    });

    const svg = createElement(BaggageClaim);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-baggage-claim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-baggage-claim>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaggageClaim],
      html: `<icon-baggage-claim stroke-width="2"></icon-baggage-claim>`,
    });

    const svg = createElement(BaggageClaim);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-baggage-claim class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-baggage-claim>
    `);
  });
});
