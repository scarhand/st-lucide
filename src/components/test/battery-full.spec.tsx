import { newSpecPage } from '@stencil/core/testing';
import { IconBatteryFull } from '../battery-full';
import { createElement, BatteryFull }  from 'lucide';

describe('icon-battery-full', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBatteryFull],
      html: `<icon-battery-full></icon-battery-full>`,
    });

    const svg = createElement(BatteryFull);

    expect(page.root).toEqualHtml(`
      <icon-battery-full class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-battery-full>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryFull],
      html: `<icon-battery-full stroke="blue"></icon-battery-full>`,
    });

    const svg = createElement(BatteryFull);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-battery-full class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-battery-full>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBatteryFull],
      html: `<icon-battery-full stroke-width="2"></icon-battery-full>`,
    });

    const svg = createElement(BatteryFull);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-battery-full class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-battery-full>
    `);
  });
});
