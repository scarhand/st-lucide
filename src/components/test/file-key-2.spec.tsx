import { newSpecPage } from '@stencil/core/testing';
import { IconFileKey2 } from '../file-key-2';
import { createElement, FileKey2 }  from 'lucide';

describe('icon-file-key-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileKey2],
      html: `<icon-file-key-2></icon-file-key-2>`,
    });

    const svg = createElement(FileKey2);

    expect(page.root).toEqualHtml(`
      <icon-file-key-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-key-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileKey2],
      html: `<icon-file-key-2 stroke="blue"></icon-file-key-2>`,
    });

    const svg = createElement(FileKey2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-key-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-key-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileKey2],
      html: `<icon-file-key-2 stroke-width="2"></icon-file-key-2>`,
    });

    const svg = createElement(FileKey2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-key-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-key-2>
    `);
  });
});
