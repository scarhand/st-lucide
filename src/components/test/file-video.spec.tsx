import { newSpecPage } from '@stencil/core/testing';
import { IconFileVideo } from '../file-video';
import { createElement, FileVideo }  from 'lucide';

describe('icon-file-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo],
      html: `<icon-file-video></icon-file-video>`,
    });

    const svg = createElement(FileVideo);

    expect(page.root).toEqualHtml(`
      <icon-file-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-video>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo],
      html: `<icon-file-video stroke="blue"></icon-file-video>`,
    });

    const svg = createElement(FileVideo);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-video>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVideo],
      html: `<icon-file-video stroke-width="2"></icon-file-video>`,
    });

    const svg = createElement(FileVideo);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-video>
    `);
  });
});
