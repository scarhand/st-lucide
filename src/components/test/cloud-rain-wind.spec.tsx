import { newSpecPage } from '@stencil/core/testing';
import { IconCloudRainWind } from '../cloud-rain-wind';
import { createElement, CloudRainWind }  from 'lucide';

describe('icon-cloud-rain-wind', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudRainWind],
      html: `<icon-cloud-rain-wind></icon-cloud-rain-wind>`,
    });

    const svg = createElement(CloudRainWind);

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-rain-wind>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudRainWind],
      html: `<icon-cloud-rain-wind stroke="blue"></icon-cloud-rain-wind>`,
    });

    const svg = createElement(CloudRainWind);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-rain-wind>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudRainWind],
      html: `<icon-cloud-rain-wind stroke-width="2"></icon-cloud-rain-wind>`,
    });

    const svg = createElement(CloudRainWind);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain-wind class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-rain-wind>
    `);
  });
});
