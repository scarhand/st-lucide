import { newSpecPage } from '@stencil/core/testing';
import { IconBatteryCharging } from '../battery-charging';
import { createElement, BatteryCharging }  from 'lucide';

describe('icon-battery-charging', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBatteryCharging],
      html: `<icon-battery-charging></icon-battery-charging>`,
    });

    const svg = createElement(BatteryCharging);

    expect(page.root).toEqualHtml(`
      <icon-battery-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-battery-charging>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryCharging],
      html: `<icon-battery-charging stroke="blue"></icon-battery-charging>`,
    });

    const svg = createElement(BatteryCharging);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-battery-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-battery-charging>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryCharging],
      html: `<icon-battery-charging stroke-width="2"></icon-battery-charging>`,
    });

    const svg = createElement(BatteryCharging);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-battery-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-battery-charging>
    `);
  });
});
