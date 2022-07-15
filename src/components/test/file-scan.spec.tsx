import { newSpecPage } from '@stencil/core/testing';
import { IconFileScan } from '../file-scan';
import { createElement, FileScan }  from 'lucide';

describe('icon-file-scan', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileScan],
      html: `<icon-file-scan></icon-file-scan>`,
    });

    const svg = createElement(FileScan);

    expect(page.root).toEqualHtml(`
      <icon-file-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-scan>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileScan],
      html: `<icon-file-scan stroke="blue"></icon-file-scan>`,
    });

    const svg = createElement(FileScan);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-scan>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileScan],
      html: `<icon-file-scan stroke-width="2"></icon-file-scan>`,
    });

    const svg = createElement(FileScan);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-scan>
    `);
  });
});
