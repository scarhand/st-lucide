import { newSpecPage } from '@stencil/core/testing';
import { IconUsb } from '../usb';
import { createElement, Usb }  from 'lucide';

describe('icon-usb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUsb],
      html: `<icon-usb></icon-usb>`,
    });

    const svg = createElement(Usb);

    expect(page.root).toEqualHtml(`
      <icon-usb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-usb>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUsb],
      html: `<icon-usb stroke="blue"></icon-usb>`,
    });

    const svg = createElement(Usb);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-usb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-usb>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUsb],
      html: `<icon-usb stroke-width="2"></icon-usb>`,
    });

    const svg = createElement(Usb);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-usb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-usb>
    `);
  });
});
