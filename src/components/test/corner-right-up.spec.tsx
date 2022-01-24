import { newSpecPage } from '@stencil/core/testing';
import { IconCornerRightUp } from '../corner-right-up';
import { createElement, CornerRightUp }  from 'lucide';

describe('icon-corner-right-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightUp],
      html: `<icon-corner-right-up></icon-corner-right-up>`,
    });

    const svg = createElement(CornerRightUp);

    expect(page.root).toEqualHtml(`
      <icon-corner-right-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-corner-right-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightUp],
      html: `<icon-corner-right-up stroke="blue"></icon-corner-right-up>`,
    });

    const svg = createElement(CornerRightUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-corner-right-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-corner-right-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCornerRightUp],
      html: `<icon-corner-right-up stroke-width="2"></icon-corner-right-up>`,
    });

    const svg = createElement(CornerRightUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-corner-right-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-corner-right-up>
    `);
  });
});
