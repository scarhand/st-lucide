import { newSpecPage } from '@stencil/core/testing';
import { IconCloudSunRain } from '../cloud-sun-rain';
import { createElement, CloudSunRain }  from 'lucide';

describe('icon-cloud-sun-rain', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudSunRain],
      html: `<icon-cloud-sun-rain></icon-cloud-sun-rain>`,
    });

    const svg = createElement(CloudSunRain);

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-sun-rain>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSunRain],
      html: `<icon-cloud-sun-rain stroke="blue"></icon-cloud-sun-rain>`,
    });

    const svg = createElement(CloudSunRain);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-sun-rain>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSunRain],
      html: `<icon-cloud-sun-rain stroke-width="2"></icon-cloud-sun-rain>`,
    });

    const svg = createElement(CloudSunRain);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun-rain class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-sun-rain>
    `);
  });
});
