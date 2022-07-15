import { newSpecPage } from '@stencil/core/testing';
import { IconFileLock } from '../file-lock';
import { createElement, FileLock }  from 'lucide';

describe('icon-file-lock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileLock],
      html: `<icon-file-lock></icon-file-lock>`,
    });

    const svg = createElement(FileLock);

    expect(page.root).toEqualHtml(`
      <icon-file-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-lock>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLock],
      html: `<icon-file-lock stroke="blue"></icon-file-lock>`,
    });

    const svg = createElement(FileLock);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-lock>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLock],
      html: `<icon-file-lock stroke-width="2"></icon-file-lock>`,
    });

    const svg = createElement(FileLock);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-lock class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-lock>
    `);
  });
});
