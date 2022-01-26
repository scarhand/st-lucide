import { newSpecPage } from '@stencil/core/testing';
import { IconMapPin } from '../map-pin';
import { createElement, MapPin }  from 'lucide';

describe('icon-map-pin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMapPin],
      html: `<icon-map-pin></icon-map-pin>`,
    });

    const svg = createElement(MapPin);

    expect(page.root).toEqualHtml(`
      <icon-map-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-map-pin>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMapPin],
      html: `<icon-map-pin stroke="blue"></icon-map-pin>`,
    });

    const svg = createElement(MapPin);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-map-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-map-pin>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMapPin],
      html: `<icon-map-pin stroke-width="2"></icon-map-pin>`,
    });

    const svg = createElement(MapPin);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-map-pin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-map-pin>
    `);
  });
});
