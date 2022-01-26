import { newSpecPage } from '@stencil/core/testing';
import { IconGamepad } from '../gamepad';
import { createElement, Gamepad }  from 'lucide';

describe('icon-gamepad', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGamepad],
      html: `<icon-gamepad></icon-gamepad>`,
    });

    const svg = createElement(Gamepad);

    expect(page.root).toEqualHtml(`
      <icon-gamepad class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gamepad>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGamepad],
      html: `<icon-gamepad stroke="blue"></icon-gamepad>`,
    });

    const svg = createElement(Gamepad);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gamepad class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gamepad>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGamepad],
      html: `<icon-gamepad stroke-width="2"></icon-gamepad>`,
    });

    const svg = createElement(Gamepad);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gamepad class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gamepad>
    `);
  });
});
