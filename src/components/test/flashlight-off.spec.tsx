import { newSpecPage } from '@stencil/core/testing';
import { IconFlashlightOff } from '../flashlight-off';
import { createElement, FlashlightOff }  from 'lucide';

describe('icon-flashlight-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlashlightOff],
      html: `<icon-flashlight-off></icon-flashlight-off>`,
    });

    const svg = createElement(FlashlightOff);

    expect(page.root).toEqualHtml(`
      <icon-flashlight-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flashlight-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlashlightOff],
      html: `<icon-flashlight-off stroke="blue"></icon-flashlight-off>`,
    });

    const svg = createElement(FlashlightOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flashlight-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flashlight-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlashlightOff],
      html: `<icon-flashlight-off stroke-width="2"></icon-flashlight-off>`,
    });

    const svg = createElement(FlashlightOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flashlight-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flashlight-off>
    `);
  });
});
