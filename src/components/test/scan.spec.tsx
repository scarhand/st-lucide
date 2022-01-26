import { newSpecPage } from '@stencil/core/testing';
import { IconScan } from '../scan';
import { createElement, Scan }  from 'lucide';

describe('icon-scan', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScan],
      html: `<icon-scan></icon-scan>`,
    });

    const svg = createElement(Scan);

    expect(page.root).toEqualHtml(`
      <icon-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scan>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScan],
      html: `<icon-scan stroke="blue"></icon-scan>`,
    });

    const svg = createElement(Scan);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scan>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScan],
      html: `<icon-scan stroke-width="2"></icon-scan>`,
    });

    const svg = createElement(Scan);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scan class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scan>
    `);
  });
});
