import { newSpecPage } from '@stencil/core/testing';
import { IconCornerRightDown } from '../corner-right-down';
import { createElement, CornerRightDown }  from 'lucide';

describe('icon-corner-right-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightDown],
      html: `<icon-corner-right-down></icon-corner-right-down>`,
    });

    const svg = createElement(CornerRightDown);

    expect(page.root).toEqualHtml(`
      <icon-corner-right-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-right-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightDown],
      html: `<icon-corner-right-down stroke="blue"></icon-corner-right-down>`,
    });

    const svg = createElement(CornerRightDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-right-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-right-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightDown],
      html: `<icon-corner-right-down stroke-width="2"></icon-corner-right-down>`,
    });

    const svg = createElement(CornerRightDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-right-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-right-down>
    `);
  });
});
