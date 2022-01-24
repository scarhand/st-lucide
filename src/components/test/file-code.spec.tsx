import { newSpecPage } from '@stencil/core/testing';
import { IconFileCode } from '../file-code';
import { createElement, FileCode }  from 'lucide';

describe('icon-file-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileCode],
      html: `<icon-file-code></icon-file-code>`,
    });

    const svg = createElement(FileCode);

    expect(page.root).toEqualHtml(`
      <icon-file-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-code>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCode],
      html: `<icon-file-code stroke="blue"></icon-file-code>`,
    });

    const svg = createElement(FileCode);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-code>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCode],
      html: `<icon-file-code stroke-width="2"></icon-file-code>`,
    });

    const svg = createElement(FileCode);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-code>
    `);
  });
});
