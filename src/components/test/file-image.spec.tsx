import { newSpecPage } from '@stencil/core/testing';
import { IconFileImage } from '../file-image';
import { createElement, FileImage }  from 'lucide';

describe('icon-file-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileImage],
      html: `<icon-file-image></icon-file-image>`,
    });

    const svg = createElement(FileImage);

    expect(page.root).toEqualHtml(`
      <icon-file-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-image>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileImage],
      html: `<icon-file-image stroke="blue"></icon-file-image>`,
    });

    const svg = createElement(FileImage);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-image>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileImage],
      html: `<icon-file-image stroke-width="2"></icon-file-image>`,
    });

    const svg = createElement(FileImage);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-image class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-image>
    `);
  });
});
