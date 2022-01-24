import { newSpecPage } from '@stencil/core/testing';
import { IconMoveHorizontal } from '../move-horizontal';
import { createElement, MoveHorizontal }  from 'lucide';

describe('icon-move-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoveHorizontal],
      html: `<icon-move-horizontal></icon-move-horizontal>`,
    });

    const svg = createElement(MoveHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-move-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveHorizontal],
      html: `<icon-move-horizontal stroke="blue"></icon-move-horizontal>`,
    });

    const svg = createElement(MoveHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveHorizontal],
      html: `<icon-move-horizontal stroke-width="2"></icon-move-horizontal>`,
    });

    const svg = createElement(MoveHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move-horizontal>
    `);
  });
});
