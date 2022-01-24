import { newSpecPage } from '@stencil/core/testing';
import { IconBluetooth } from '../bluetooth';
import { createElement, Bluetooth }  from 'lucide';

describe('icon-bluetooth', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBluetooth],
      html: `<icon-bluetooth></icon-bluetooth>`,
    });

    const svg = createElement(Bluetooth);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bluetooth>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetooth],
      html: `<icon-bluetooth stroke="blue"></icon-bluetooth>`,
    });

    const svg = createElement(Bluetooth);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bluetooth class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bluetooth>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBluetooth],
      html: `<icon-bluetooth stroke-width="2"></icon-bluetooth>`,
    });

    const svg = createElement(Bluetooth);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bluetooth class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bluetooth>
    `);
  });
});
