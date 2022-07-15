import { newSpecPage } from '@stencil/core/testing';
import { IconFileType } from '../file-type';
import { createElement, FileType }  from 'lucide';

describe('icon-file-type', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileType],
      html: `<icon-file-type></icon-file-type>`,
    });

    const svg = createElement(FileType);

    expect(page.root).toEqualHtml(`
      <icon-file-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-type>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileType],
      html: `<icon-file-type stroke="blue"></icon-file-type>`,
    });

    const svg = createElement(FileType);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-type>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileType],
      html: `<icon-file-type stroke-width="2"></icon-file-type>`,
    });

    const svg = createElement(FileType);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-type>
    `);
  });
});
