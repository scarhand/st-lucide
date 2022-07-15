import { newSpecPage } from '@stencil/core/testing';
import { IconCloudCog } from '../cloud-cog';
import { createElement, CloudCog }  from 'lucide';

describe('icon-cloud-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudCog],
      html: `<icon-cloud-cog></icon-cloud-cog>`,
    });

    const svg = createElement(CloudCog);

    expect(page.root).toEqualHtml(`
      <icon-cloud-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudCog],
      html: `<icon-cloud-cog stroke="blue"></icon-cloud-cog>`,
    });

    const svg = createElement(CloudCog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudCog],
      html: `<icon-cloud-cog stroke-width="2"></icon-cloud-cog>`,
    });

    const svg = createElement(CloudCog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-cog>
    `);
  });
});
