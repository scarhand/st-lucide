import { newSpecPage } from '@stencil/core/testing';
import { IconFileDigit } from '../file-digit';
import { createElement, FileDigit }  from 'lucide';

describe('icon-file-digit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileDigit],
      html: `<icon-file-digit></icon-file-digit>`,
    });

    const svg = createElement(FileDigit);

    expect(page.root).toEqualHtml(`
      <icon-file-digit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-digit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDigit],
      html: `<icon-file-digit stroke="blue"></icon-file-digit>`,
    });

    const svg = createElement(FileDigit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-digit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-digit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDigit],
      html: `<icon-file-digit stroke-width="2"></icon-file-digit>`,
    });

    const svg = createElement(FileDigit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-digit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-digit>
    `);
  });
});
