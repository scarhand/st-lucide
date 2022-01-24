import { newSpecPage } from '@stencil/core/testing';
import { IconCar } from '../car';
import { createElement, Car }  from 'lucide';

describe('icon-car', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCar],
      html: `<icon-car></icon-car>`,
    });

    const svg = createElement(Car);

    expect(page.root).toEqualHtml(`
      <icon-car class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-car>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCar],
      html: `<icon-car stroke="blue"></icon-car>`,
    });

    const svg = createElement(Car);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-car class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-car>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCar],
      html: `<icon-car stroke-width="2"></icon-car>`,
    });

    const svg = createElement(Car);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-car class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-car>
    `);
  });
});
