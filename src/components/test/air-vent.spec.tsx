import { newSpecPage } from '@stencil/core/testing';
import { IconAirVent } from '../air-vent';
import { createElement, AirVent }  from 'lucide';

describe('icon-air-vent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAirVent],
      html: `<icon-air-vent></icon-air-vent>`,
    });

    const svg = createElement(AirVent);

    expect(page.root).toEqualHtml(`
      <icon-air-vent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-air-vent>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAirVent],
      html: `<icon-air-vent stroke="blue"></icon-air-vent>`,
    });

    const svg = createElement(AirVent);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-air-vent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-air-vent>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAirVent],
      html: `<icon-air-vent stroke-width="2"></icon-air-vent>`,
    });

    const svg = createElement(AirVent);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-air-vent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-air-vent>
    `);
  });
});
