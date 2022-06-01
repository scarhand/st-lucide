import { newSpecPage } from '@stencil/core/testing';
import { IconMapPinOff } from '../map-pin-off';
import { createElement, MapPinOff }  from 'lucide';

describe('icon-map-pin-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMapPinOff],
      html: `<icon-map-pin-off></icon-map-pin-off>`,
    });

    const svg = createElement(MapPinOff);

    expect(page.root).toEqualHtml(`
      <icon-map-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-map-pin-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMapPinOff],
      html: `<icon-map-pin-off stroke="blue"></icon-map-pin-off>`,
    });

    const svg = createElement(MapPinOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-map-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-map-pin-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMapPinOff],
      html: `<icon-map-pin-off stroke-width="2"></icon-map-pin-off>`,
    });

    const svg = createElement(MapPinOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-map-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-map-pin-off>
    `);
  });
});
