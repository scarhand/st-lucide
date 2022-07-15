import { newSpecPage } from '@stencil/core/testing';
import { IconFileVolume } from '../file-volume';
import { createElement, FileVolume }  from 'lucide';

describe('icon-file-volume', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume],
      html: `<icon-file-volume></icon-file-volume>`,
    });

    const svg = createElement(FileVolume);

    expect(page.root).toEqualHtml(`
      <icon-file-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-volume>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume],
      html: `<icon-file-volume stroke="blue"></icon-file-volume>`,
    });

    const svg = createElement(FileVolume);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-volume>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileVolume],
      html: `<icon-file-volume stroke-width="2"></icon-file-volume>`,
    });

    const svg = createElement(FileVolume);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-volume>
    `);
  });
});
