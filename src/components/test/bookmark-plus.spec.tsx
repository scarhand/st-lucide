import { newSpecPage } from '@stencil/core/testing';
import { IconBookmarkPlus } from '../bookmark-plus';
import { createElement, BookmarkPlus }  from 'lucide';

describe('icon-bookmark-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkPlus],
      html: `<icon-bookmark-plus></icon-bookmark-plus>`,
    });

    const svg = createElement(BookmarkPlus);

    expect(page.root).toEqualHtml(`
      <icon-bookmark-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bookmark-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkPlus],
      html: `<icon-bookmark-plus stroke="blue"></icon-bookmark-plus>`,
    });

    const svg = createElement(BookmarkPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bookmark-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bookmark-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmarkPlus],
      html: `<icon-bookmark-plus stroke-width="2"></icon-bookmark-plus>`,
    });

    const svg = createElement(BookmarkPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bookmark-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bookmark-plus>
    `);
  });
});
