import { newSpecPage } from '@stencil/core/testing';
import { IconMoveDiagonal2 } from '../move-diagonal-2';
import { createElement, MoveDiagonal2 }  from 'lucide';

describe('icon-move-diagonal-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal2],
      html: `<icon-move-diagonal-2></icon-move-diagonal-2>`,
    });

    const svg = createElement(MoveDiagonal2);

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move-diagonal-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal2],
      html: `<icon-move-diagonal-2 stroke="blue"></icon-move-diagonal-2>`,
    });

    const svg = createElement(MoveDiagonal2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move-diagonal-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveDiagonal2],
      html: `<icon-move-diagonal-2 stroke-width="2"></icon-move-diagonal-2>`,
    });

    const svg = createElement(MoveDiagonal2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move-diagonal-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move-diagonal-2>
    `);
  });
});
