import { newSpecPage } from '@stencil/core/testing';
import { IconBluetoothOff } from '../bluetooth-off';
import { createElement, BluetoothOff }  from 'lucide';

describe('icon-bluetooth-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothOff],
      html: `<icon-bluetooth-off></icon-bluetooth-off>`,
    });

    const svg = createElement(BluetoothOff);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bluetooth-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothOff],
      html: `<icon-bluetooth-off stroke="blue"></icon-bluetooth-off>`,
    });

    const svg = createElement(BluetoothOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bluetooth-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothOff],
      html: `<icon-bluetooth-off stroke-width="2"></icon-bluetooth-off>`,
    });

    const svg = createElement(BluetoothOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bluetooth-off>
    `);
  });
});
