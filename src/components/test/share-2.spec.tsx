import { newSpecPage } from '@stencil/core/testing';
import { IconShare2 } from '../share-2';
import { createElement, Share2 }  from 'lucide';

describe('icon-share-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShare2],
      html: `<icon-share-2></icon-share-2>`,
    });

    const svg = createElement(Share2);

    expect(page.root).toEqualHtml(`
      <icon-share-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-share-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShare2],
      html: `<icon-share-2 stroke="blue"></icon-share-2>`,
    });

    const svg = createElement(Share2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-share-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-share-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShare2],
      html: `<icon-share-2 stroke-width="2"></icon-share-2>`,
    });

    const svg = createElement(Share2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-share-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-share-2>
    `);
  });
});
