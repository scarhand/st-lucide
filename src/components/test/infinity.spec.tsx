import { newSpecPage } from '@stencil/core/testing';
import { IconInfinity } from '../infinity';
import { createElement, Infinity }  from 'lucide';

describe('icon-infinity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconInfinity],
      html: `<icon-infinity></icon-infinity>`,
    });

    const svg = createElement(Infinity);

    expect(page.root).toEqualHtml(`
      <icon-infinity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-infinity>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInfinity],
      html: `<icon-infinity stroke="blue"></icon-infinity>`,
    });

    const svg = createElement(Infinity);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-infinity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-infinity>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInfinity],
      html: `<icon-infinity stroke-width="2"></icon-infinity>`,
    });

    const svg = createElement(Infinity);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-infinity class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-infinity>
    `);
  });
});
