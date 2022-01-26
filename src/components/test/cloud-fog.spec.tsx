import { newSpecPage } from '@stencil/core/testing';
import { IconCloudFog } from '../cloud-fog';
import { createElement, CloudFog }  from 'lucide';

describe('icon-cloud-fog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudFog],
      html: `<icon-cloud-fog></icon-cloud-fog>`,
    });

    const svg = createElement(CloudFog);

    expect(page.root).toEqualHtml(`
      <icon-cloud-fog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-fog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudFog],
      html: `<icon-cloud-fog stroke="blue"></icon-cloud-fog>`,
    });

    const svg = createElement(CloudFog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-fog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-fog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudFog],
      html: `<icon-cloud-fog stroke-width="2"></icon-cloud-fog>`,
    });

    const svg = createElement(CloudFog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-fog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-fog>
    `);
  });
});
