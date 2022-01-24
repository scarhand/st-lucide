import { newSpecPage } from '@stencil/core/testing';
import { IconCornerDownRight } from '../corner-down-right';
import { createElement, CornerDownRight }  from 'lucide';

describe('icon-corner-down-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownRight],
      html: `<icon-corner-down-right></icon-corner-down-right>`,
    });

    const svg = createElement(CornerDownRight);

    expect(page.root).toEqualHtml(`
      <icon-corner-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-down-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownRight],
      html: `<icon-corner-down-right stroke="blue"></icon-corner-down-right>`,
    });

    const svg = createElement(CornerDownRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-down-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerDownRight],
      html: `<icon-corner-down-right stroke-width="2"></icon-corner-down-right>`,
    });

    const svg = createElement(CornerDownRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-down-right>
    `);
  });
});
