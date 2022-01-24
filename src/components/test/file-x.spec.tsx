import { newSpecPage } from '@stencil/core/testing';
import { IconFileX } from '../file-x';
import { createElement, FileX }  from 'lucide';

describe('icon-file-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileX],
      html: `<icon-file-x></icon-file-x>`,
    });

    const svg = createElement(FileX);

    expect(page.root).toEqualHtml(`
      <icon-file-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileX],
      html: `<icon-file-x stroke="blue"></icon-file-x>`,
    });

    const svg = createElement(FileX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileX],
      html: `<icon-file-x stroke-width="2"></icon-file-x>`,
    });

    const svg = createElement(FileX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-x>
    `);
  });
});
