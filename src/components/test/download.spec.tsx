import { newSpecPage } from '@stencil/core/testing';
import { IconDownload } from '../download';
import { createElement, Download }  from 'lucide';

describe('icon-download', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDownload],
      html: `<icon-download></icon-download>`,
    });

    const svg = createElement(Download);

    expect(page.root).toEqualHtml(`
      <icon-download class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-download>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDownload],
      html: `<icon-download stroke="blue"></icon-download>`,
    });

    const svg = createElement(Download);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-download class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-download>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDownload],
      html: `<icon-download stroke-width="2"></icon-download>`,
    });

    const svg = createElement(Download);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-download class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-download>
    `);
  });
});
