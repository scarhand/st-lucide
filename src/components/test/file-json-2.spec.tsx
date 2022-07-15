import { newSpecPage } from '@stencil/core/testing';
import { IconFileJson2 } from '../file-json-2';
import { createElement, FileJson2 }  from 'lucide';

describe('icon-file-json-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileJson2],
      html: `<icon-file-json-2></icon-file-json-2>`,
    });

    const svg = createElement(FileJson2);

    expect(page.root).toEqualHtml(`
      <icon-file-json-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-json-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileJson2],
      html: `<icon-file-json-2 stroke="blue"></icon-file-json-2>`,
    });

    const svg = createElement(FileJson2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-json-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-json-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileJson2],
      html: `<icon-file-json-2 stroke-width="2"></icon-file-json-2>`,
    });

    const svg = createElement(FileJson2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-json-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-json-2>
    `);
  });
});
