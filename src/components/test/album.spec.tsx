import { newSpecPage } from '@stencil/core/testing';
import { IconAlbum } from '../album';
import { createElement, Album }  from 'lucide';

describe('icon-album', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlbum],
      html: `<icon-album></icon-album>`,
    });

    const svg = createElement(Album);

    expect(page.root).toEqualHtml(`
      <icon-album class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-album>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlbum],
      html: `<icon-album stroke="blue"></icon-album>`,
    });

    const svg = createElement(Album);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-album class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-album>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlbum],
      html: `<icon-album stroke-width="2"></icon-album>`,
    });

    const svg = createElement(Album);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-album class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-album>
    `);
  });
});
