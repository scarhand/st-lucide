import { newSpecPage } from '@stencil/core/testing';
import { IconMousePointerClick } from '../mouse-pointer-click';
import { createElement, MousePointerClick }  from 'lucide';

describe('icon-mouse-pointer-click', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMousePointerClick],
      html: `<icon-mouse-pointer-click></icon-mouse-pointer-click>`,
    });

    const svg = createElement(MousePointerClick);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-click class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mouse-pointer-click>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointerClick],
      html: `<icon-mouse-pointer-click stroke="blue"></icon-mouse-pointer-click>`,
    });

    const svg = createElement(MousePointerClick);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-click class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mouse-pointer-click>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointerClick],
      html: `<icon-mouse-pointer-click stroke-width="2"></icon-mouse-pointer-click>`,
    });

    const svg = createElement(MousePointerClick);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-click class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mouse-pointer-click>
    `);
  });
});
