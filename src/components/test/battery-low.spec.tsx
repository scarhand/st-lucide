import { newSpecPage } from '@stencil/core/testing';
import { IconBatteryLow } from '../battery-low';
import { createElement, BatteryLow }  from 'lucide';

describe('icon-battery-low', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBatteryLow],
      html: `<icon-battery-low></icon-battery-low>`,
    });

    const svg = createElement(BatteryLow);

    expect(page.root).toEqualHtml(`
      <icon-battery-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-battery-low>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryLow],
      html: `<icon-battery-low stroke="blue"></icon-battery-low>`,
    });

    const svg = createElement(BatteryLow);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-battery-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-battery-low>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryLow],
      html: `<icon-battery-low stroke-width="2"></icon-battery-low>`,
    });

    const svg = createElement(BatteryLow);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-battery-low class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-battery-low>
    `);
  });
});
