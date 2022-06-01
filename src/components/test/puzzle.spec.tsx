import { newSpecPage } from '@stencil/core/testing';
import { IconPuzzle } from '../puzzle';
import { createElement, Puzzle }  from 'lucide';

describe('icon-puzzle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPuzzle],
      html: `<icon-puzzle></icon-puzzle>`,
    });

    const svg = createElement(Puzzle);

    expect(page.root).toEqualHtml(`
      <icon-puzzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-puzzle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPuzzle],
      html: `<icon-puzzle stroke="blue"></icon-puzzle>`,
    });

    const svg = createElement(Puzzle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-puzzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-puzzle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPuzzle],
      html: `<icon-puzzle stroke-width="2"></icon-puzzle>`,
    });

    const svg = createElement(Puzzle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-puzzle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-puzzle>
    `);
  });
});
