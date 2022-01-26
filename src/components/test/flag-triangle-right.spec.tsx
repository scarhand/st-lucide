import { newSpecPage } from '@stencil/core/testing';
import { IconFlagTriangleRight } from '../flag-triangle-right';
import { createElement, FlagTriangleRight }  from 'lucide';

describe('icon-flag-triangle-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleRight],
      html: `<icon-flag-triangle-right></icon-flag-triangle-right>`,
    });

    const svg = createElement(FlagTriangleRight);

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flag-triangle-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleRight],
      html: `<icon-flag-triangle-right stroke="blue"></icon-flag-triangle-right>`,
    });

    const svg = createElement(FlagTriangleRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flag-triangle-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleRight],
      html: `<icon-flag-triangle-right stroke-width="2"></icon-flag-triangle-right>`,
    });

    const svg = createElement(FlagTriangleRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flag-triangle-right>
    `);
  });
});
