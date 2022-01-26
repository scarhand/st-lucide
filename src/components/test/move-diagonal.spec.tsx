import { newSpecPage } from '@stencil/core/testing';
import { IconMoveDiagonal } from '../move-diagonal';
import { createElement, MoveDiagonal }  from 'lucide';

describe('icon-move-diagonal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal],
      html: `<icon-move-diagonal></icon-move-diagonal>`,
    });

    const svg = createElement(MoveDiagonal);

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move-diagonal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal],
      html: `<icon-move-diagonal stroke="blue"></icon-move-diagonal>`,
    });

    const svg = createElement(MoveDiagonal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move-diagonal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal],
      html: `<icon-move-diagonal stroke-width="2"></icon-move-diagonal>`,
    });

    const svg = createElement(MoveDiagonal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move-diagonal>
    `);
  });
});
