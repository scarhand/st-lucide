import { newSpecPage } from '@stencil/core/testing';
import { IconCornerDownLeft } from '../corner-down-left';
import { createElement, CornerDownLeft }  from 'lucide';

describe('icon-corner-down-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownLeft],
      html: `<icon-corner-down-left></icon-corner-down-left>`,
    });

    const svg = createElement(CornerDownLeft);

    expect(page.root).toEqualHtml(`
      <icon-corner-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-down-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownLeft],
      html: `<icon-corner-down-left stroke="blue"></icon-corner-down-left>`,
    });

    const svg = createElement(CornerDownLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-down-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownLeft],
      html: `<icon-corner-down-left stroke-width="2"></icon-corner-down-left>`,
    });

    const svg = createElement(CornerDownLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-down-left>
    `);
  });
});
