import { newSpecPage } from '@stencil/core/testing';
import { IconBookOpen } from '../book-open';
import { createElement, BookOpen }  from 'lucide';

describe('icon-book-open', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBookOpen],
      html: `<icon-book-open></icon-book-open>`,
    });

    const svg = createElement(BookOpen);

    expect(page.root).toEqualHtml(`
      <icon-book-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-book-open>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookOpen],
      html: `<icon-book-open stroke="blue"></icon-book-open>`,
    });

    const svg = createElement(BookOpen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-book-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-book-open>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBookOpen],
      html: `<icon-book-open stroke-width="2"></icon-book-open>`,
    });

    const svg = createElement(BookOpen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-book-open class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-book-open>
    `);
  });
});
