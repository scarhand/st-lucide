import { newSpecPage } from '@stencil/core/testing';
import { IconLifeBuoy } from '../life-buoy';
import { createElement, LifeBuoy }  from 'lucide';

describe('icon-life-buoy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLifeBuoy],
      html: `<icon-life-buoy></icon-life-buoy>`,
    });

    const svg = createElement(LifeBuoy);

    expect(page.root).toEqualHtml(`
      <icon-life-buoy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-life-buoy>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLifeBuoy],
      html: `<icon-life-buoy stroke="blue"></icon-life-buoy>`,
    });

    const svg = createElement(LifeBuoy);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-life-buoy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-life-buoy>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLifeBuoy],
      html: `<icon-life-buoy stroke-width="2"></icon-life-buoy>`,
    });

    const svg = createElement(LifeBuoy);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-life-buoy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-life-buoy>
    `);
  });
});
