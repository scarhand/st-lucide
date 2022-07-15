import { newSpecPage } from '@stencil/core/testing';
import { IconStickyNote } from '../sticky-note';
import { createElement, StickyNote }  from 'lucide';

describe('icon-sticky-note', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStickyNote],
      html: `<icon-sticky-note></icon-sticky-note>`,
    });

    const svg = createElement(StickyNote);

    expect(page.root).toEqualHtml(`
      <icon-sticky-note class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sticky-note>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStickyNote],
      html: `<icon-sticky-note stroke="blue"></icon-sticky-note>`,
    });

    const svg = createElement(StickyNote);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sticky-note class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sticky-note>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStickyNote],
      html: `<icon-sticky-note stroke-width="2"></icon-sticky-note>`,
    });

    const svg = createElement(StickyNote);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sticky-note class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sticky-note>
    `);
  });
});
