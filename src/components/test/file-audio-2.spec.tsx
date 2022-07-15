import { newSpecPage } from '@stencil/core/testing';
import { IconFileAudio2 } from '../file-audio-2';
import { createElement, FileAudio2 }  from 'lucide';

describe('icon-file-audio-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio2],
      html: `<icon-file-audio-2></icon-file-audio-2>`,
    });

    const svg = createElement(FileAudio2);

    expect(page.root).toEqualHtml(`
      <icon-file-audio-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-audio-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio2],
      html: `<icon-file-audio-2 stroke="blue"></icon-file-audio-2>`,
    });

    const svg = createElement(FileAudio2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-audio-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-audio-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio2],
      html: `<icon-file-audio-2 stroke-width="2"></icon-file-audio-2>`,
    });

    const svg = createElement(FileAudio2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-audio-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-audio-2>
    `);
  });
});
