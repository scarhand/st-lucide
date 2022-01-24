import { newSpecPage } from '@stencil/core/testing';
import { IconUndo } from '../undo';
import { createElement, Undo }  from 'lucide';

describe('icon-undo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUndo],
      html: `<icon-undo></icon-undo>`,
    });

    const svg = createElement(Undo);

    expect(page.root).toEqualHtml(`
      <icon-undo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-undo>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUndo],
      html: `<icon-undo stroke="blue"></icon-undo>`,
    });

    const svg = createElement(Undo);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-undo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-undo>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUndo],
      html: `<icon-undo stroke-width="2"></icon-undo>`,
    });

    const svg = createElement(Undo);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-undo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-undo>
    `);
  });
});
