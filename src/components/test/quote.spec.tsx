import { newSpecPage } from '@stencil/core/testing';
import { IconQuote } from '../quote';
import { createElement, Quote }  from 'lucide';

describe('icon-quote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconQuote],
      html: `<icon-quote></icon-quote>`,
    });

    const svg = createElement(Quote);

    expect(page.root).toEqualHtml(`
      <icon-quote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-quote>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconQuote],
      html: `<icon-quote stroke="blue"></icon-quote>`,
    });

    const svg = createElement(Quote);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-quote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-quote>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconQuote],
      html: `<icon-quote stroke-width="2"></icon-quote>`,
    });

    const svg = createElement(Quote);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-quote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-quote>
    `);
  });
});
