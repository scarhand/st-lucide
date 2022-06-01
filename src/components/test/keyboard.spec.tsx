import { newSpecPage } from '@stencil/core/testing';
import { IconKeyboard } from '../keyboard';
import { createElement, Keyboard }  from 'lucide';

describe('icon-keyboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconKeyboard],
      html: `<icon-keyboard></icon-keyboard>`,
    });

    const svg = createElement(Keyboard);

    expect(page.root).toEqualHtml(`
      <icon-keyboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-keyboard>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconKeyboard],
      html: `<icon-keyboard stroke="blue"></icon-keyboard>`,
    });

    const svg = createElement(Keyboard);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-keyboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-keyboard>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconKeyboard],
      html: `<icon-keyboard stroke-width="2"></icon-keyboard>`,
    });

    const svg = createElement(Keyboard);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-keyboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-keyboard>
    `);
  });
});
