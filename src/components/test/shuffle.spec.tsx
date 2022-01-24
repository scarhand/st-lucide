import { newSpecPage } from '@stencil/core/testing';
import { IconShuffle } from '../shuffle';
import { createElement, Shuffle }  from 'lucide';

describe('icon-shuffle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShuffle],
      html: `<icon-shuffle></icon-shuffle>`,
    });

    const svg = createElement(Shuffle);

    expect(page.root).toEqualHtml(`
      <icon-shuffle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shuffle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShuffle],
      html: `<icon-shuffle stroke="blue"></icon-shuffle>`,
    });

    const svg = createElement(Shuffle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shuffle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shuffle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShuffle],
      html: `<icon-shuffle stroke-width="2"></icon-shuffle>`,
    });

    const svg = createElement(Shuffle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shuffle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shuffle>
    `);
  });
});
