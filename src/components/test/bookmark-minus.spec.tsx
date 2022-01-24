import { newSpecPage } from '@stencil/core/testing';
import { IconBookmarkMinus } from '../bookmark-minus';
import { createElement, BookmarkMinus }  from 'lucide';

describe('icon-bookmark-minus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkMinus],
      html: `<icon-bookmark-minus></icon-bookmark-minus>`,
    });

    const svg = createElement(BookmarkMinus);

    expect(page.root).toEqualHtml(`
      <icon-bookmark-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bookmark-minus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkMinus],
      html: `<icon-bookmark-minus stroke="blue"></icon-bookmark-minus>`,
    });

    const svg = createElement(BookmarkMinus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bookmark-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bookmark-minus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkMinus],
      html: `<icon-bookmark-minus stroke-width="2"></icon-bookmark-minus>`,
    });

    const svg = createElement(BookmarkMinus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bookmark-minus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bookmark-minus>
    `);
  });
});
