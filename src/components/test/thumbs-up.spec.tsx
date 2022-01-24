import { newSpecPage } from '@stencil/core/testing';
import { IconThumbsUp } from '../thumbs-up';
import { createElement, ThumbsUp }  from 'lucide';

describe('icon-thumbs-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconThumbsUp],
      html: `<icon-thumbs-up></icon-thumbs-up>`,
    });

    const svg = createElement(ThumbsUp);

    expect(page.root).toEqualHtml(`
      <icon-thumbs-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-thumbs-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThumbsUp],
      html: `<icon-thumbs-up stroke="blue"></icon-thumbs-up>`,
    });

    const svg = createElement(ThumbsUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-thumbs-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-thumbs-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconThumbsUp],
      html: `<icon-thumbs-up stroke-width="2"></icon-thumbs-up>`,
    });

    const svg = createElement(ThumbsUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-thumbs-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-thumbs-up>
    `);
  });
});
