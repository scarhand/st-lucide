import { newSpecPage } from '@stencil/core/testing';
import { IconCloudRain } from '../cloud-rain';
import { createElement, CloudRain }  from 'lucide';

describe('icon-cloud-rain', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudRain],
      html: `<icon-cloud-rain></icon-cloud-rain>`,
    });

    const svg = createElement(CloudRain);

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-rain>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudRain],
      html: `<icon-cloud-rain stroke="blue"></icon-cloud-rain>`,
    });

    const svg = createElement(CloudRain);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-rain>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudRain],
      html: `<icon-cloud-rain stroke-width="2"></icon-cloud-rain>`,
    });

    const svg = createElement(CloudRain);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-rain>
    `);
  });
});
