import { newSpecPage } from '@stencil/core/testing';
import { IconMoveVertical } from '../move-vertical';
import { createElement, MoveVertical }  from 'lucide';

describe('icon-move-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoveVertical],
      html: `<icon-move-vertical></icon-move-vertical>`,
    });

    const svg = createElement(MoveVertical);

    expect(page.root).toEqualHtml(`
      <icon-move-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-move-vertical>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveVertical],
      html: `<icon-move-vertical stroke="blue"></icon-move-vertical>`,
    });

    const svg = createElement(MoveVertical);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-move-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-move-vertical>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoveVertical],
      html: `<icon-move-vertical stroke-width="2"></icon-move-vertical>`,
    });

    const svg = createElement(MoveVertical);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-move-vertical class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-move-vertical>
    `);
  });
});
