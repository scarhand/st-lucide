import { newSpecPage } from '@stencil/core/testing';
import { IconIceCream } from '../ice-cream';
import { createElement, IceCream }  from 'lucide';

describe('icon-ice-cream', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconIceCream],
      html: `<icon-ice-cream></icon-ice-cream>`,
    });

    const svg = createElement(IceCream);

    expect(page.root).toEqualHtml(`
      <icon-ice-cream class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-ice-cream>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIceCream],
      html: `<icon-ice-cream stroke="blue"></icon-ice-cream>`,
    });

    const svg = createElement(IceCream);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-ice-cream class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-ice-cream>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIceCream],
      html: `<icon-ice-cream stroke-width="2"></icon-ice-cream>`,
    });

    const svg = createElement(IceCream);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-ice-cream class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-ice-cream>
    `);
  });
});
