import { newSpecPage } from '@stencil/core/testing';
import { IconFileX2 } from '../file-x-2';
import { createElement, FileX2 }  from 'lucide';

describe('icon-file-x-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileX2],
      html: `<icon-file-x-2></icon-file-x-2>`,
    });

    const svg = createElement(FileX2);

    expect(page.root).toEqualHtml(`
      <icon-file-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-x-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileX2],
      html: `<icon-file-x-2 stroke="blue"></icon-file-x-2>`,
    });

    const svg = createElement(FileX2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-x-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileX2],
      html: `<icon-file-x-2 stroke-width="2"></icon-file-x-2>`,
    });

    const svg = createElement(FileX2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-x-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-x-2>
    `);
  });
});
