import { newSpecPage } from '@stencil/core/testing';
import { IconFileType2 } from '../file-type-2';
import { createElement, FileType2 }  from 'lucide';

describe('icon-file-type-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileType2],
      html: `<icon-file-type-2></icon-file-type-2>`,
    });

    const svg = createElement(FileType2);

    expect(page.root).toEqualHtml(`
      <icon-file-type-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-type-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileType2],
      html: `<icon-file-type-2 stroke="blue"></icon-file-type-2>`,
    });

    const svg = createElement(FileType2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-type-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-type-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileType2],
      html: `<icon-file-type-2 stroke-width="2"></icon-file-type-2>`,
    });

    const svg = createElement(FileType2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-type-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-type-2>
    `);
  });
});
