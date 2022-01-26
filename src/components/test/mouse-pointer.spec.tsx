import { newSpecPage } from '@stencil/core/testing';
import { IconMousePointer } from '../mouse-pointer';
import { createElement, MousePointer }  from 'lucide';

describe('icon-mouse-pointer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer],
      html: `<icon-mouse-pointer></icon-mouse-pointer>`,
    });

    const svg = createElement(MousePointer);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mouse-pointer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer],
      html: `<icon-mouse-pointer stroke="blue"></icon-mouse-pointer>`,
    });

    const svg = createElement(MousePointer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mouse-pointer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer],
      html: `<icon-mouse-pointer stroke-width="2"></icon-mouse-pointer>`,
    });

    const svg = createElement(MousePointer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mouse-pointer>
    `);
  });
});
