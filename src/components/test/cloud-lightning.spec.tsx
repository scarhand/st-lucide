import { newSpecPage } from '@stencil/core/testing';
import { IconCloudLightning } from '../cloud-lightning';
import { createElement, CloudLightning }  from 'lucide';

describe('icon-cloud-lightning', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudLightning],
      html: `<icon-cloud-lightning></icon-cloud-lightning>`,
    });

    const svg = createElement(CloudLightning);

    expect(page.root).toEqualHtml(`
      <icon-cloud-lightning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-lightning>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudLightning],
      html: `<icon-cloud-lightning stroke="blue"></icon-cloud-lightning>`,
    });

    const svg = createElement(CloudLightning);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-lightning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-lightning>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudLightning],
      html: `<icon-cloud-lightning stroke-width="2"></icon-cloud-lightning>`,
    });

    const svg = createElement(CloudLightning);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-lightning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-lightning>
    `);
  });
});
