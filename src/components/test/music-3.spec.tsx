import { newSpecPage } from '@stencil/core/testing';
import { IconMusic3 } from '../music-3';
import { createElement, Music3 }  from 'lucide';

describe('icon-music-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMusic3],
      html: `<icon-music-3></icon-music-3>`,
    });

    const svg = createElement(Music3);

    expect(page.root).toEqualHtml(`
      <icon-music-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-music-3>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic3],
      html: `<icon-music-3 stroke="blue"></icon-music-3>`,
    });

    const svg = createElement(Music3);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-music-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-music-3>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMusic3],
      html: `<icon-music-3 stroke-width="2"></icon-music-3>`,
    });

    const svg = createElement(Music3);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-music-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-music-3>
    `);
  });
});
