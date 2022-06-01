import { newSpecPage } from '@stencil/core/testing';
import { IconVibrateOff } from '../vibrate-off';
import { createElement, VibrateOff }  from 'lucide';

describe('icon-vibrate-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVibrateOff],
      html: `<icon-vibrate-off></icon-vibrate-off>`,
    });

    const svg = createElement(VibrateOff);

    expect(page.root).toEqualHtml(`
      <icon-vibrate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-vibrate-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVibrateOff],
      html: `<icon-vibrate-off stroke="blue"></icon-vibrate-off>`,
    });

    const svg = createElement(VibrateOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-vibrate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-vibrate-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVibrateOff],
      html: `<icon-vibrate-off stroke-width="2"></icon-vibrate-off>`,
    });

    const svg = createElement(VibrateOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-vibrate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-vibrate-off>
    `);
  });
});
