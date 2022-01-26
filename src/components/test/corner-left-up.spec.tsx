import { newSpecPage } from '@stencil/core/testing';
import { IconCornerLeftUp } from '../corner-left-up';
import { createElement, CornerLeftUp }  from 'lucide';

describe('icon-corner-left-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftUp],
      html: `<icon-corner-left-up></icon-corner-left-up>`,
    });

    const svg = createElement(CornerLeftUp);

    expect(page.root).toEqualHtml(`
      <icon-corner-left-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-left-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftUp],
      html: `<icon-corner-left-up stroke="blue"></icon-corner-left-up>`,
    });

    const svg = createElement(CornerLeftUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-left-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-left-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftUp],
      html: `<icon-corner-left-up stroke-width="2"></icon-corner-left-up>`,
    });

    const svg = createElement(CornerLeftUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-left-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-left-up>
    `);
  });
});
