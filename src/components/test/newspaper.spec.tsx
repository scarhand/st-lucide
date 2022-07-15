import { newSpecPage } from '@stencil/core/testing';
import { IconNewspaper } from '../newspaper';
import { createElement, Newspaper }  from 'lucide';

describe('icon-newspaper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconNewspaper],
      html: `<icon-newspaper></icon-newspaper>`,
    });

    const svg = createElement(Newspaper);

    expect(page.root).toEqualHtml(`
      <icon-newspaper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-newspaper>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNewspaper],
      html: `<icon-newspaper stroke="blue"></icon-newspaper>`,
    });

    const svg = createElement(Newspaper);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-newspaper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-newspaper>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconNewspaper],
      html: `<icon-newspaper stroke-width="2"></icon-newspaper>`,
    });

    const svg = createElement(Newspaper);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-newspaper class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-newspaper>
    `);
  });
});
