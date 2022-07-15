import { newSpecPage } from '@stencil/core/testing';
import { IconSticker } from '../sticker';
import { createElement, Sticker }  from 'lucide';

describe('icon-sticker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSticker],
      html: `<icon-sticker></icon-sticker>`,
    });

    const svg = createElement(Sticker);

    expect(page.root).toEqualHtml(`
      <icon-sticker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sticker>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSticker],
      html: `<icon-sticker stroke="blue"></icon-sticker>`,
    });

    const svg = createElement(Sticker);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sticker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sticker>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSticker],
      html: `<icon-sticker stroke-width="2"></icon-sticker>`,
    });

    const svg = createElement(Sticker);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sticker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sticker>
    `);
  });
});
