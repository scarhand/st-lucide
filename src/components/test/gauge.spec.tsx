import { newSpecPage } from '@stencil/core/testing';
import { IconGauge } from '../gauge';
import { createElement, Gauge }  from 'lucide';

describe('icon-gauge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGauge],
      html: `<icon-gauge></icon-gauge>`,
    });

    const svg = createElement(Gauge);

    expect(page.root).toEqualHtml(`
      <icon-gauge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gauge>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGauge],
      html: `<icon-gauge stroke="blue"></icon-gauge>`,
    });

    const svg = createElement(Gauge);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gauge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gauge>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGauge],
      html: `<icon-gauge stroke-width="2"></icon-gauge>`,
    });

    const svg = createElement(Gauge);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gauge class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gauge>
    `);
  });
});
