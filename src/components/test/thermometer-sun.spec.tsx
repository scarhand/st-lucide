import { newSpecPage } from '@stencil/core/testing';
import { IconThermometerSun } from '../thermometer-sun';
import { createElement, ThermometerSun }  from 'lucide';

describe('icon-thermometer-sun', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSun],
      html: `<icon-thermometer-sun></icon-thermometer-sun>`,
    });

    const svg = createElement(ThermometerSun);

    expect(page.root).toEqualHtml(`
      <icon-thermometer-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-thermometer-sun>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSun],
      html: `<icon-thermometer-sun stroke="blue"></icon-thermometer-sun>`,
    });

    const svg = createElement(ThermometerSun);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-thermometer-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-thermometer-sun>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometerSun],
      html: `<icon-thermometer-sun stroke-width="2"></icon-thermometer-sun>`,
    });

    const svg = createElement(ThermometerSun);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-thermometer-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-thermometer-sun>
    `);
  });
});
