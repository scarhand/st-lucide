import { newSpecPage } from '@stencil/core/testing';
import { IconCloudSun } from '../cloud-sun';
import { createElement, CloudSun }  from 'lucide';

describe('icon-cloud-sun', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudSun],
      html: `<icon-cloud-sun></icon-cloud-sun>`,
    });

    const svg = createElement(CloudSun);

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-sun>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSun],
      html: `<icon-cloud-sun stroke="blue"></icon-cloud-sun>`,
    });

    const svg = createElement(CloudSun);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-sun>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSun],
      html: `<icon-cloud-sun stroke-width="2"></icon-cloud-sun>`,
    });

    const svg = createElement(CloudSun);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-sun class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-sun>
    `);
  });
});
