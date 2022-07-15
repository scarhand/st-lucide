import { newSpecPage } from '@stencil/core/testing';
import { IconCloudMoonRain } from '../cloud-moon-rain';
import { createElement, CloudMoonRain }  from 'lucide';

describe('icon-cloud-moon-rain', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoonRain],
      html: `<icon-cloud-moon-rain></icon-cloud-moon-rain>`,
    });

    const svg = createElement(CloudMoonRain);

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-moon-rain>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoonRain],
      html: `<icon-cloud-moon-rain stroke="blue"></icon-cloud-moon-rain>`,
    });

    const svg = createElement(CloudMoonRain);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-moon-rain>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoonRain],
      html: `<icon-cloud-moon-rain stroke-width="2"></icon-cloud-moon-rain>`,
    });

    const svg = createElement(CloudMoonRain);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-moon-rain>
    `);
  });
});
