import { newSpecPage } from '@stencil/core/testing';
import { IconFileLock2 } from '../file-lock-2';
import { createElement, FileLock2 }  from 'lucide';

describe('icon-file-lock-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileLock2],
      html: `<icon-file-lock-2></icon-file-lock-2>`,
    });

    const svg = createElement(FileLock2);

    expect(page.root).toEqualHtml(`
      <icon-file-lock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-lock-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLock2],
      html: `<icon-file-lock-2 stroke="blue"></icon-file-lock-2>`,
    });

    const svg = createElement(FileLock2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-lock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-lock-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileLock2],
      html: `<icon-file-lock-2 stroke-width="2"></icon-file-lock-2>`,
    });

    const svg = createElement(FileLock2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-lock-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-lock-2>
    `);
  });
});
