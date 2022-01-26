import { newSpecPage } from '@stencil/core/testing';
import { IconBluetoothSearching } from '../bluetooth-searching';
import { createElement, BluetoothSearching }  from 'lucide';

describe('icon-bluetooth-searching', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothSearching],
      html: `<icon-bluetooth-searching></icon-bluetooth-searching>`,
    });

    const svg = createElement(BluetoothSearching);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-searching class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bluetooth-searching>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothSearching],
      html: `<icon-bluetooth-searching stroke="blue"></icon-bluetooth-searching>`,
    });

    const svg = createElement(BluetoothSearching);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-searching class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bluetooth-searching>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetoothSearching],
      html: `<icon-bluetooth-searching stroke-width="2"></icon-bluetooth-searching>`,
    });

    const svg = createElement(BluetoothSearching);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth-searching class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bluetooth-searching>
    `);
  });
});
