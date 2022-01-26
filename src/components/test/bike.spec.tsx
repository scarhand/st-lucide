import { newSpecPage } from '@stencil/core/testing';
import { IconBike } from '../bike';
import { createElement, Bike }  from 'lucide';

describe('icon-bike', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBike],
      html: `<icon-bike></icon-bike>`,
    });

    const svg = createElement(Bike);

    expect(page.root).toEqualHtml(`
      <icon-bike class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bike>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBike],
      html: `<icon-bike stroke="blue"></icon-bike>`,
    });

    const svg = createElement(Bike);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bike class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bike>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBike],
      html: `<icon-bike stroke-width="2"></icon-bike>`,
    });

    const svg = createElement(Bike);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bike class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bike>
    `);
  });
});
