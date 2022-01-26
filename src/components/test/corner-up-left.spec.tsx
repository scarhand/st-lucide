import { newSpecPage } from '@stencil/core/testing';
import { IconCornerUpLeft } from '../corner-up-left';
import { createElement, CornerUpLeft }  from 'lucide';

describe('icon-corner-up-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpLeft],
      html: `<icon-corner-up-left></icon-corner-up-left>`,
    });

    const svg = createElement(CornerUpLeft);

    expect(page.root).toEqualHtml(`
      <icon-corner-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-up-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpLeft],
      html: `<icon-corner-up-left stroke="blue"></icon-corner-up-left>`,
    });

    const svg = createElement(CornerUpLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-up-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpLeft],
      html: `<icon-corner-up-left stroke-width="2"></icon-corner-up-left>`,
    });

    const svg = createElement(CornerUpLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-up-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-up-left>
    `);
  });
});
