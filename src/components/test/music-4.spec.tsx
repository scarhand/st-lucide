import { newSpecPage } from '@stencil/core/testing';
import { IconMusic4 } from '../music-4';
import { createElement, Music4 }  from 'lucide';

describe('icon-music-4', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMusic4],
      html: `<icon-music-4></icon-music-4>`,
    });

    const svg = createElement(Music4);

    expect(page.root).toEqualHtml(`
      <icon-music-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-music-4>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic4],
      html: `<icon-music-4 stroke="blue"></icon-music-4>`,
    });

    const svg = createElement(Music4);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-music-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-music-4>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic4],
      html: `<icon-music-4 stroke-width="2"></icon-music-4>`,
    });

    const svg = createElement(Music4);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-music-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-music-4>
    `);
  });
});
