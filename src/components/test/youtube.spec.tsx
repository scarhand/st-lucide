import { newSpecPage } from '@stencil/core/testing';
import { IconYoutube } from '../youtube';
import { createElement, Youtube }  from 'lucide';

describe('icon-youtube', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconYoutube],
      html: `<icon-youtube></icon-youtube>`,
    });

    const svg = createElement(Youtube);

    expect(page.root).toEqualHtml(`
      <icon-youtube class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-youtube>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconYoutube],
      html: `<icon-youtube stroke="blue"></icon-youtube>`,
    });

    const svg = createElement(Youtube);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-youtube class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-youtube>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconYoutube],
      html: `<icon-youtube stroke-width="2"></icon-youtube>`,
    });

    const svg = createElement(Youtube);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-youtube class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-youtube>
    `);
  });
});
