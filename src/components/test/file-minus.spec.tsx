import { newSpecPage } from '@stencil/core/testing';
import { IconFileMinus } from '../file-minus';
import { createElement, FileMinus }  from 'lucide';

describe('icon-file-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus],
      html: `<icon-file-minus></icon-file-minus>`,
    });

    const svg = createElement(FileMinus);

    expect(page.root).toEqualHtml(`
      <icon-file-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus],
      html: `<icon-file-minus stroke="blue"></icon-file-minus>`,
    });

    const svg = createElement(FileMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileMinus],
      html: `<icon-file-minus stroke-width="2"></icon-file-minus>`,
    });

    const svg = createElement(FileMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-minus>
    `);
  });
});
