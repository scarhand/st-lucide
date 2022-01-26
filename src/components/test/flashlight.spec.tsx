import { newSpecPage } from '@stencil/core/testing';
import { IconFlashlight } from '../flashlight';
import { createElement, Flashlight }  from 'lucide';

describe('icon-flashlight', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlashlight],
      html: `<icon-flashlight></icon-flashlight>`,
    });

    const svg = createElement(Flashlight);

    expect(page.root).toEqualHtml(`
      <icon-flashlight class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flashlight>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlashlight],
      html: `<icon-flashlight stroke="blue"></icon-flashlight>`,
    });

    const svg = createElement(Flashlight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flashlight class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flashlight>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlashlight],
      html: `<icon-flashlight stroke-width="2"></icon-flashlight>`,
    });

    const svg = createElement(Flashlight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flashlight class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flashlight>
    `);
  });
});
