import { newSpecPage } from '@stencil/core/testing';
import { IconQrCode } from '../qr-code';
import { createElement, QrCode }  from 'lucide';

describe('icon-qr-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconQrCode],
      html: `<icon-qr-code></icon-qr-code>`,
    });

    const svg = createElement(QrCode);

    expect(page.root).toEqualHtml(`
      <icon-qr-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-qr-code>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconQrCode],
      html: `<icon-qr-code stroke="blue"></icon-qr-code>`,
    });

    const svg = createElement(QrCode);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-qr-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-qr-code>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconQrCode],
      html: `<icon-qr-code stroke-width="2"></icon-qr-code>`,
    });

    const svg = createElement(QrCode);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-qr-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-qr-code>
    `);
  });
});
