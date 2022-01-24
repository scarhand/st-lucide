import { newSpecPage } from '@stencil/core/testing';
import { IconBookmark } from '../bookmark';
import { createElement, Bookmark }  from 'lucide';

describe('icon-bookmark', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBookmark],
      html: `<icon-bookmark></icon-bookmark>`,
    });

    const svg = createElement(Bookmark);

    expect(page.root).toEqualHtml(`
      <icon-bookmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bookmark>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmark],
      html: `<icon-bookmark stroke="blue"></icon-bookmark>`,
    });

    const svg = createElement(Bookmark);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bookmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bookmark>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookmark],
      html: `<icon-bookmark stroke-width="2"></icon-bookmark>`,
    });

    const svg = createElement(Bookmark);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bookmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bookmark>
    `);
  });
});
