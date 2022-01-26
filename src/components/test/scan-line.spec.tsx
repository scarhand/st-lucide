import { newSpecPage } from '@stencil/core/testing';
import { IconScanLine } from '../scan-line';
import { createElement, ScanLine }  from 'lucide';

describe('icon-scan-line', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScanLine],
      html: `<icon-scan-line></icon-scan-line>`,
    });

    const svg = createElement(ScanLine);

    expect(page.root).toEqualHtml(`
      <icon-scan-line class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scan-line>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScanLine],
      html: `<icon-scan-line stroke="blue"></icon-scan-line>`,
    });

    const svg = createElement(ScanLine);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scan-line class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scan-line>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScanLine],
      html: `<icon-scan-line stroke-width="2"></icon-scan-line>`,
    });

    const svg = createElement(ScanLine);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scan-line class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scan-line>
    `);
  });
});
