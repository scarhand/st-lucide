import { newSpecPage } from '@stencil/core/testing';
import { IconFileUp } from '../file-up';
import { createElement, FileUp }  from 'lucide';

describe('icon-file-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileUp],
      html: `<icon-file-up></icon-file-up>`,
    });

    const svg = createElement(FileUp);

    expect(page.root).toEqualHtml(`
      <icon-file-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileUp],
      html: `<icon-file-up stroke="blue"></icon-file-up>`,
    });

    const svg = createElement(FileUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileUp],
      html: `<icon-file-up stroke-width="2"></icon-file-up>`,
    });

    const svg = createElement(FileUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-up>
    `);
  });
});
