import { newSpecPage } from '@stencil/core/testing';
import { IconMouse } from '../mouse';
import { createElement, Mouse }  from 'lucide';

describe('icon-mouse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMouse],
      html: `<icon-mouse></icon-mouse>`,
    });

    const svg = createElement(Mouse);

    expect(page.root).toEqualHtml(`
      <icon-mouse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-mouse>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMouse],
      html: `<icon-mouse stroke="blue"></icon-mouse>`,
    });

    const svg = createElement(Mouse);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-mouse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-mouse>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMouse],
      html: `<icon-mouse stroke-width="2"></icon-mouse>`,
    });

    const svg = createElement(Mouse);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-mouse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-mouse>
    `);
  });
});
