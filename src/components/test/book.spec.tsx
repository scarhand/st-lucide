import { newSpecPage } from '@stencil/core/testing';
import { IconBook } from '../book';
import { createElement, Book }  from 'lucide';

describe('icon-book', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBook],
      html: `<icon-book></icon-book>`,
    });

    const svg = createElement(Book);

    expect(page.root).toEqualHtml(`
      <icon-book class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-book>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBook],
      html: `<icon-book stroke="blue"></icon-book>`,
    });

    const svg = createElement(Book);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-book class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-book>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBook],
      html: `<icon-book stroke-width="2"></icon-book>`,
    });

    const svg = createElement(Book);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-book class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-book>
    `);
  });
});
