import { newSpecPage } from '@stencil/core/testing';
import { IconCloudDrizzle } from '../cloud-drizzle';
import { createElement, CloudDrizzle }  from 'lucide';

describe('icon-cloud-drizzle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudDrizzle],
      html: `<icon-cloud-drizzle></icon-cloud-drizzle>`,
    });

    const svg = createElement(CloudDrizzle);

    expect(page.root).toEqualHtml(`
      <icon-cloud-drizzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-drizzle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudDrizzle],
      html: `<icon-cloud-drizzle stroke="blue"></icon-cloud-drizzle>`,
    });

    const svg = createElement(CloudDrizzle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-drizzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-drizzle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudDrizzle],
      html: `<icon-cloud-drizzle stroke-width="2"></icon-cloud-drizzle>`,
    });

    const svg = createElement(CloudDrizzle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-drizzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-drizzle>
    `);
  });
});
