import { newSpecPage } from '@stencil/core/testing';
import { IconCloudMoon } from '../cloud-moon';
import { createElement, CloudMoon }  from 'lucide';

describe('icon-cloud-moon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoon],
      html: `<icon-cloud-moon></icon-cloud-moon>`,
    });

    const svg = createElement(CloudMoon);

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-moon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoon],
      html: `<icon-cloud-moon stroke="blue"></icon-cloud-moon>`,
    });

    const svg = createElement(CloudMoon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-moon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudMoon],
      html: `<icon-cloud-moon stroke-width="2"></icon-cloud-moon>`,
    });

    const svg = createElement(CloudMoon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-moon>
    `);
  });
});
