import { newSpecPage } from '@stencil/core/testing';
import { IconUndo2 } from '../undo-2';
import { createElement, Undo2 }  from 'lucide';

describe('icon-undo-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUndo2],
      html: `<icon-undo-2></icon-undo-2>`,
    });

    const svg = createElement(Undo2);

    expect(page.root).toEqualHtml(`
      <icon-undo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-undo-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUndo2],
      html: `<icon-undo-2 stroke="blue"></icon-undo-2>`,
    });

    const svg = createElement(Undo2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-undo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-undo-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUndo2],
      html: `<icon-undo-2 stroke-width="2"></icon-undo-2>`,
    });

    const svg = createElement(Undo2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-undo-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-undo-2>
    `);
  });
});
