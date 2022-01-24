import { newSpecPage } from '@stencil/core/testing';
import { IconThermometer } from '../thermometer';
import { createElement, Thermometer }  from 'lucide';

describe('icon-thermometer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconThermometer],
      html: `<icon-thermometer></icon-thermometer>`,
    });

    const svg = createElement(Thermometer);

    expect(page.root).toEqualHtml(`
      <icon-thermometer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-thermometer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometer],
      html: `<icon-thermometer stroke="blue"></icon-thermometer>`,
    });

    const svg = createElement(Thermometer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-thermometer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-thermometer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThermometer],
      html: `<icon-thermometer stroke-width="2"></icon-thermometer>`,
    });

    const svg = createElement(Thermometer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-thermometer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-thermometer>
    `);
  });
});
