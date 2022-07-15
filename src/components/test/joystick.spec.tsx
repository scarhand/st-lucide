import { newSpecPage } from '@stencil/core/testing';
import { IconJoystick } from '../joystick';
import { createElement, Joystick }  from 'lucide';

describe('icon-joystick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconJoystick],
      html: `<icon-joystick></icon-joystick>`,
    });

    const svg = createElement(Joystick);

    expect(page.root).toEqualHtml(`
      <icon-joystick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-joystick>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconJoystick],
      html: `<icon-joystick stroke="blue"></icon-joystick>`,
    });

    const svg = createElement(Joystick);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-joystick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-joystick>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconJoystick],
      html: `<icon-joystick stroke-width="2"></icon-joystick>`,
    });

    const svg = createElement(Joystick);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-joystick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-joystick>
    `);
  });
});
