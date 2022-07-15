import { newSpecPage } from '@stencil/core/testing';
import { IconFileKey } from '../file-key';
import { createElement, FileKey }  from 'lucide';

describe('icon-file-key', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileKey],
      html: `<icon-file-key></icon-file-key>`,
    });

    const svg = createElement(FileKey);

    expect(page.root).toEqualHtml(`
      <icon-file-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-key>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileKey],
      html: `<icon-file-key stroke="blue"></icon-file-key>`,
    });

    const svg = createElement(FileKey);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-key>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileKey],
      html: `<icon-file-key stroke-width="2"></icon-file-key>`,
    });

    const svg = createElement(FileKey);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-key class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-key>
    `);
  });
});
