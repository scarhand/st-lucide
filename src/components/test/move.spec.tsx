import { newSpecPage } from '@stencil/core/testing';
import { IconMove } from '../move';
import { createElement, Move }  from 'lucide';

describe('icon-move', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMove],
      html: `<icon-move></icon-move>`,
    });

    const svg = createElement(Move);

    expect(page.root).toEqualHtml(`
      <icon-move class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMove],
      html: `<icon-move stroke="blue"></icon-move>`,
    });

    const svg = createElement(Move);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMove],
      html: `<icon-move stroke-width="2"></icon-move>`,
    });

    const svg = createElement(Move);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move>
    `);
  });
});
