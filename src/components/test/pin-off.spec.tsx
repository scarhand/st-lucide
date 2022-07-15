import { newSpecPage } from '@stencil/core/testing';
import { IconPinOff } from '../pin-off';
import { createElement, PinOff }  from 'lucide';

describe('icon-pin-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPinOff],
      html: `<icon-pin-off></icon-pin-off>`,
    });

    const svg = createElement(PinOff);

    expect(page.root).toEqualHtml(`
      <icon-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pin-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPinOff],
      html: `<icon-pin-off stroke="blue"></icon-pin-off>`,
    });

    const svg = createElement(PinOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pin-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPinOff],
      html: `<icon-pin-off stroke-width="2"></icon-pin-off>`,
    });

    const svg = createElement(PinOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pin-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pin-off>
    `);
  });
});
