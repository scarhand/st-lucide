import { newSpecPage } from '@stencil/core/testing';
import { IconCloudOff } from '../cloud-off';
import { createElement, CloudOff }  from 'lucide';

describe('icon-cloud-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudOff],
      html: `<icon-cloud-off></icon-cloud-off>`,
    });

    const svg = createElement(CloudOff);

    expect(page.root).toEqualHtml(`
      <icon-cloud-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudOff],
      html: `<icon-cloud-off stroke="blue"></icon-cloud-off>`,
    });

    const svg = createElement(CloudOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudOff],
      html: `<icon-cloud-off stroke-width="2"></icon-cloud-off>`,
    });

    const svg = createElement(CloudOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-off>
    `);
  });
});
