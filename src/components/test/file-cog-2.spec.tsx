import { newSpecPage } from '@stencil/core/testing';
import { IconFileCog2 } from '../file-cog-2';
import { createElement, FileCog2 }  from 'lucide';

describe('icon-file-cog-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileCog2],
      html: `<icon-file-cog-2></icon-file-cog-2>`,
    });

    const svg = createElement(FileCog2);

    expect(page.root).toEqualHtml(`
      <icon-file-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-cog-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCog2],
      html: `<icon-file-cog-2 stroke="blue"></icon-file-cog-2>`,
    });

    const svg = createElement(FileCog2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-cog-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCog2],
      html: `<icon-file-cog-2 stroke-width="2"></icon-file-cog-2>`,
    });

    const svg = createElement(FileCog2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-cog-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-cog-2>
    `);
  });
});
