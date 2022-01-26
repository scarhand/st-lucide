import { newSpecPage } from '@stencil/core/testing';
import { IconAirplay } from '../airplay';
import { createElement, Airplay }  from 'lucide';

describe('icon-airplay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAirplay],
      html: `<icon-airplay></icon-airplay>`,
    });

    const svg = createElement(Airplay);

    expect(page.root).toEqualHtml(`
      <icon-airplay class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-airplay>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAirplay],
      html: `<icon-airplay stroke="blue"></icon-airplay>`,
    });

    const svg = createElement(Airplay);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-airplay class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-airplay>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAirplay],
      html: `<icon-airplay stroke-width="2"></icon-airplay>`,
    });

    const svg = createElement(Airplay);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-airplay class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-airplay>
    `);
  });
});
