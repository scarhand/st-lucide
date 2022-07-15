import { newSpecPage } from '@stencil/core/testing';
import { IconFileArchive } from '../file-archive';
import { createElement, FileArchive }  from 'lucide';

describe('icon-file-archive', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileArchive],
      html: `<icon-file-archive></icon-file-archive>`,
    });

    const svg = createElement(FileArchive);

    expect(page.root).toEqualHtml(`
      <icon-file-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-archive>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileArchive],
      html: `<icon-file-archive stroke="blue"></icon-file-archive>`,
    });

    const svg = createElement(FileArchive);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-archive>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileArchive],
      html: `<icon-file-archive stroke-width="2"></icon-file-archive>`,
    });

    const svg = createElement(FileArchive);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-archive class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-archive>
    `);
  });
});
