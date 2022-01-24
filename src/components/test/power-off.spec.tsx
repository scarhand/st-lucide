import { newSpecPage } from '@stencil/core/testing';
import { IconPowerOff } from '../power-off';
import { createElement, PowerOff }  from 'lucide';

describe('icon-power-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPowerOff],
      html: `<icon-power-off></icon-power-off>`,
    });

    const svg = createElement(PowerOff);

    expect(page.root).toEqualHtml(`
      <icon-power-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-power-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPowerOff],
      html: `<icon-power-off stroke="blue"></icon-power-off>`,
    });

    const svg = createElement(PowerOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-power-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-power-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPowerOff],
      html: `<icon-power-off stroke-width="2"></icon-power-off>`,
    });

    const svg = createElement(PowerOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-power-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-power-off>
    `);
  });
});
