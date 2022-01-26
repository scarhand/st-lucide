import { newSpecPage } from '@stencil/core/testing';
import { IconCloudSnow } from '../cloud-snow';
import { createElement, CloudSnow }  from 'lucide';

describe('icon-cloud-snow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudSnow],
      html: `<icon-cloud-snow></icon-cloud-snow>`,
    });

    const svg = createElement(CloudSnow);

    expect(page.root).toEqualHtml(`
      <icon-cloud-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-snow>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSnow],
      html: `<icon-cloud-snow stroke="blue"></icon-cloud-snow>`,
    });

    const svg = createElement(CloudSnow);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-snow>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudSnow],
      html: `<icon-cloud-snow stroke-width="2"></icon-cloud-snow>`,
    });

    const svg = createElement(CloudSnow);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-snow class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-snow>
    `);
  });
});
