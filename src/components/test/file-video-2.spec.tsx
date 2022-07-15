import { newSpecPage } from '@stencil/core/testing';
import { IconFileVideo2 } from '../file-video-2';
import { createElement, FileVideo2 }  from 'lucide';

describe('icon-file-video-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo2],
      html: `<icon-file-video-2></icon-file-video-2>`,
    });

    const svg = createElement(FileVideo2);

    expect(page.root).toEqualHtml(`
      <icon-file-video-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-video-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo2],
      html: `<icon-file-video-2 stroke="blue"></icon-file-video-2>`,
    });

    const svg = createElement(FileVideo2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-video-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-video-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo2],
      html: `<icon-file-video-2 stroke-width="2"></icon-file-video-2>`,
    });

    const svg = createElement(FileVideo2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-video-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-video-2>
    `);
  });
});
