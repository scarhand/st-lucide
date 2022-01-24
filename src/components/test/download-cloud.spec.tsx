import { newSpecPage } from '@stencil/core/testing';
import { IconDownloadCloud } from '../download-cloud';
import { createElement, DownloadCloud }  from 'lucide';

describe('icon-download-cloud', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDownloadCloud],
      html: `<icon-download-cloud></icon-download-cloud>`,
    });

    const svg = createElement(DownloadCloud);

    expect(page.root).toEqualHtml(`
      <icon-download-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-download-cloud>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDownloadCloud],
      html: `<icon-download-cloud stroke="blue"></icon-download-cloud>`,
    });

    const svg = createElement(DownloadCloud);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-download-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-download-cloud>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDownloadCloud],
      html: `<icon-download-cloud stroke-width="2"></icon-download-cloud>`,
    });

    const svg = createElement(DownloadCloud);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-download-cloud class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-download-cloud>
    `);
  });
});
