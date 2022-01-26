import { newSpecPage } from '@stencil/core/testing';
import { IconFlagTriangleLeft } from '../flag-triangle-left';
import { createElement, FlagTriangleLeft }  from 'lucide';

describe('icon-flag-triangle-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleLeft],
      html: `<icon-flag-triangle-left></icon-flag-triangle-left>`,
    });

    const svg = createElement(FlagTriangleLeft);

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flag-triangle-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleLeft],
      html: `<icon-flag-triangle-left stroke="blue"></icon-flag-triangle-left>`,
    });

    const svg = createElement(FlagTriangleLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flag-triangle-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlagTriangleLeft],
      html: `<icon-flag-triangle-left stroke-width="2"></icon-flag-triangle-left>`,
    });

    const svg = createElement(FlagTriangleLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flag-triangle-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flag-triangle-left>
    `);
  });
});
