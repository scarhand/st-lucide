import { newSpecPage } from '@stencil/core/testing';
import { IconCornerLeftDown } from '../corner-left-down';
import { createElement, CornerLeftDown }  from 'lucide';

describe('icon-corner-left-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftDown],
      html: `<icon-corner-left-down></icon-corner-left-down>`,
    });

    const svg = createElement(CornerLeftDown);

    expect(page.root).toEqualHtml(`
      <icon-corner-left-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-left-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftDown],
      html: `<icon-corner-left-down stroke="blue"></icon-corner-left-down>`,
    });

    const svg = createElement(CornerLeftDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-left-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-left-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerLeftDown],
      html: `<icon-corner-left-down stroke-width="2"></icon-corner-left-down>`,
    });

    const svg = createElement(CornerLeftDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-left-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-left-down>
    `);
  });
});
