import { newSpecPage } from '@stencil/core/testing';
import { IconFileVolume2 } from '../file-volume-2';
import { createElement, FileVolume2 }  from 'lucide';

describe('icon-file-volume-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume2],
      html: `<icon-file-volume-2></icon-file-volume-2>`,
    });

    const svg = createElement(FileVolume2);

    expect(page.root).toEqualHtml(`
      <icon-file-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-volume-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume2],
      html: `<icon-file-volume-2 stroke="blue"></icon-file-volume-2>`,
    });

    const svg = createElement(FileVolume2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-volume-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume2],
      html: `<icon-file-volume-2 stroke-width="2"></icon-file-volume-2>`,
    });

    const svg = createElement(FileVolume2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-volume-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-volume-2>
    `);
  });
});
