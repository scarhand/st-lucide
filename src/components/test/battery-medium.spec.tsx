import { newSpecPage } from '@stencil/core/testing';
import { IconBatteryMedium } from '../battery-medium';
import { createElement, BatteryMedium }  from 'lucide';

describe('icon-battery-medium', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBatteryMedium],
      html: `<icon-battery-medium></icon-battery-medium>`,
    });

    const svg = createElement(BatteryMedium);

    expect(page.root).toEqualHtml(`
      <icon-battery-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-battery-medium>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryMedium],
      html: `<icon-battery-medium stroke="blue"></icon-battery-medium>`,
    });

    const svg = createElement(BatteryMedium);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-battery-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-battery-medium>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryMedium],
      html: `<icon-battery-medium stroke-width="2"></icon-battery-medium>`,
    });

    const svg = createElement(BatteryMedium);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-battery-medium class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-battery-medium>
    `);
  });
});
