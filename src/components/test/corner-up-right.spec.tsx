import { newSpecPage } from '@stencil/core/testing';
import { IconCornerUpRight } from '../corner-up-right';
import { createElement, CornerUpRight }  from 'lucide';

describe('icon-corner-up-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpRight],
      html: `<icon-corner-up-right></icon-corner-up-right>`,
    });

    const svg = createElement(CornerUpRight);

    expect(page.root).toEqualHtml(`
      <icon-corner-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-up-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpRight],
      html: `<icon-corner-up-right stroke="blue"></icon-corner-up-right>`,
    });

    const svg = createElement(CornerUpRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-up-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerUpRight],
      html: `<icon-corner-up-right stroke-width="2"></icon-corner-up-right>`,
    });

    const svg = createElement(CornerUpRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-up-right>
    `);
  });
});
