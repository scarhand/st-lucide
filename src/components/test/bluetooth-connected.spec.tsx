import { newSpecPage } from '@stencil/core/testing';
import { IconBluetoothConnected } from '../bluetooth-connected';
import { createElement, BluetoothConnected }  from 'lucide';

describe('icon-bluetooth-connected', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothConnected],
      html: `<icon-bluetooth-connected></icon-bluetooth-connected>`,
    });

    const svg = createElement(BluetoothConnected);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-connected class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bluetooth-connected>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothConnected],
      html: `<icon-bluetooth-connected stroke="blue"></icon-bluetooth-connected>`,
    });

    const svg = createElement(BluetoothConnected);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-connected class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bluetooth-connected>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothConnected],
      html: `<icon-bluetooth-connected stroke-width="2"></icon-bluetooth-connected>`,
    });

    const svg = createElement(BluetoothConnected);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-connected class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bluetooth-connected>
    `);
  });
});
