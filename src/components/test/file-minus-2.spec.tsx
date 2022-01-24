import { newSpecPage } from '@stencil/core/testing';
import { IconFileMinus2 } from '../file-minus-2';
import { createElement, FileMinus2 }  from 'lucide';

describe('icon-file-minus-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus2],
      html: `<icon-file-minus-2></icon-file-minus-2>`,
    });

    const svg = createElement(FileMinus2);

    expect(page.root).toEqualHtml(`
      <icon-file-minus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-minus-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus2],
      html: `<icon-file-minus-2 stroke="blue"></icon-file-minus-2>`,
    });

    const svg = createElement(FileMinus2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-minus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-minus-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus2],
      html: `<icon-file-minus-2 stroke-width="2"></icon-file-minus-2>`,
    });

    const svg = createElement(FileMinus2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-minus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-minus-2>
    `);
  });
});
