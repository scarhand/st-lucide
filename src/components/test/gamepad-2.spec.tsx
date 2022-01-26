import { newSpecPage } from '@stencil/core/testing';
import { IconGamepad2 } from '../gamepad-2';
import { createElement, Gamepad2 }  from 'lucide';

describe('icon-gamepad-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGamepad2],
      html: `<icon-gamepad-2></icon-gamepad-2>`,
    });

    const svg = createElement(Gamepad2);

    expect(page.root).toEqualHtml(`
      <icon-gamepad-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gamepad-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGamepad2],
      html: `<icon-gamepad-2 stroke="blue"></icon-gamepad-2>`,
    });

    const svg = createElement(Gamepad2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gamepad-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gamepad-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGamepad2],
      html: `<icon-gamepad-2 stroke-width="2"></icon-gamepad-2>`,
    });

    const svg = createElement(Gamepad2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gamepad-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gamepad-2>
    `);
  });
});
