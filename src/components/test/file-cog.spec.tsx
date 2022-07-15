import { newSpecPage } from '@stencil/core/testing';
import { IconFileCog } from '../file-cog';
import { createElement, FileCog }  from 'lucide';

describe('icon-file-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileCog],
      html: `<icon-file-cog></icon-file-cog>`,
    });

    const svg = createElement(FileCog);

    expect(page.root).toEqualHtml(`
      <icon-file-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCog],
      html: `<icon-file-cog stroke="blue"></icon-file-cog>`,
    });

    const svg = createElement(FileCog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCog],
      html: `<icon-file-cog stroke-width="2"></icon-file-cog>`,
    });

    const svg = createElement(FileCog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-cog>
    `);
  });
});
