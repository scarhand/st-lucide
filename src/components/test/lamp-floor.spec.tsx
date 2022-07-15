import { newSpecPage } from '@stencil/core/testing';
import { IconLampFloor } from '../lamp-floor';
import { createElement, LampFloor }  from 'lucide';

describe('icon-lamp-floor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLampFloor],
      html: `<icon-lamp-floor></icon-lamp-floor>`,
    });

    const svg = createElement(LampFloor);

    expect(page.root).toEqualHtml(`
      <icon-lamp-floor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp-floor>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampFloor],
      html: `<icon-lamp-floor stroke="blue"></icon-lamp-floor>`,
    });

    const svg = createElement(LampFloor);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp-floor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp-floor>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampFloor],
      html: `<icon-lamp-floor stroke-width="2"></icon-lamp-floor>`,
    });

    const svg = createElement(LampFloor);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp-floor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp-floor>
    `);
  });
});
