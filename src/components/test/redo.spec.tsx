import { newSpecPage } from '@stencil/core/testing';
import { IconRedo } from '../redo';
import { createElement, Redo }  from 'lucide';

describe('icon-redo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRedo],
      html: `<icon-redo></icon-redo>`,
    });

    const svg = createElement(Redo);

    expect(page.root).toEqualHtml(`
      <icon-redo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-redo>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRedo],
      html: `<icon-redo stroke="blue"></icon-redo>`,
    });

    const svg = createElement(Redo);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-redo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-redo>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRedo],
      html: `<icon-redo stroke-width="2"></icon-redo>`,
    });

    const svg = createElement(Redo);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-redo class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-redo>
    `);
  });
});
