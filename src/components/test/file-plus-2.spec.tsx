import { newSpecPage } from '@stencil/core/testing';
import { IconFilePlus2 } from '../file-plus-2';
import { createElement, FilePlus2 }  from 'lucide';

describe('icon-file-plus-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus2],
      html: `<icon-file-plus-2></icon-file-plus-2>`,
    });

    const svg = createElement(FilePlus2);

    expect(page.root).toEqualHtml(`
      <icon-file-plus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-plus-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus2],
      html: `<icon-file-plus-2 stroke="blue"></icon-file-plus-2>`,
    });

    const svg = createElement(FilePlus2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-plus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-plus-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilePlus2],
      html: `<icon-file-plus-2 stroke-width="2"></icon-file-plus-2>`,
    });

    const svg = createElement(FilePlus2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-plus-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-plus-2>
    `);
  });
});
