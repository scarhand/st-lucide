import { newSpecPage } from '@stencil/core/testing';
import { IconMousePointer2 } from '../mouse-pointer-2';
import { createElement, MousePointer2 }  from 'lucide';

describe('icon-mouse-pointer-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer2],
      html: `<icon-mouse-pointer-2></icon-mouse-pointer-2>`,
    });

    const svg = createElement(MousePointer2);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mouse-pointer-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer2],
      html: `<icon-mouse-pointer-2 stroke="blue"></icon-mouse-pointer-2>`,
    });

    const svg = createElement(MousePointer2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mouse-pointer-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMousePointer2],
      html: `<icon-mouse-pointer-2 stroke-width="2"></icon-mouse-pointer-2>`,
    });

    const svg = createElement(MousePointer2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mouse-pointer-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mouse-pointer-2>
    `);
  });
});
