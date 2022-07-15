import { newSpecPage } from '@stencil/core/testing';
import { IconFileAudio } from '../file-audio';
import { createElement, FileAudio }  from 'lucide';

describe('icon-file-audio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio],
      html: `<icon-file-audio></icon-file-audio>`,
    });

    const svg = createElement(FileAudio);

    expect(page.root).toEqualHtml(`
      <icon-file-audio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-audio>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio],
      html: `<icon-file-audio stroke="blue"></icon-file-audio>`,
    });

    const svg = createElement(FileAudio);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-audio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-audio>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileAudio],
      html: `<icon-file-audio stroke-width="2"></icon-file-audio>`,
    });

    const svg = createElement(FileAudio);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-audio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-audio>
    `);
  });
});
