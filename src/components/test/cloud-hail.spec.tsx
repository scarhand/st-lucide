import { newSpecPage } from '@stencil/core/testing';
import { IconCloudHail } from '../cloud-hail';
import { createElement, CloudHail }  from 'lucide';

describe('icon-cloud-hail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudHail],
      html: `<icon-cloud-hail></icon-cloud-hail>`,
    });

    const svg = createElement(CloudHail);

    expect(page.root).toEqualHtml(`
      <icon-cloud-hail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloud-hail>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudHail],
      html: `<icon-cloud-hail stroke="blue"></icon-cloud-hail>`,
    });

    const svg = createElement(CloudHail);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloud-hail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloud-hail>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudHail],
      html: `<icon-cloud-hail stroke-width="2"></icon-cloud-hail>`,
    });

    const svg = createElement(CloudHail);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloud-hail class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloud-hail>
    `);
  });
});
