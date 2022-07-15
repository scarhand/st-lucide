import { newSpecPage } from '@stencil/core/testing';
import { IconScanFace } from '../scan-face';
import { createElement, ScanFace }  from 'lucide';

describe('icon-scan-face', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScanFace],
      html: `<icon-scan-face></icon-scan-face>`,
    });

    const svg = createElement(ScanFace);

    expect(page.root).toEqualHtml(`
      <icon-scan-face class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scan-face>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScanFace],
      html: `<icon-scan-face stroke="blue"></icon-scan-face>`,
    });

    const svg = createElement(ScanFace);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scan-face class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scan-face>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScanFace],
      html: `<icon-scan-face stroke-width="2"></icon-scan-face>`,
    });

    const svg = createElement(ScanFace);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scan-face class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scan-face>
    `);
  });
});
