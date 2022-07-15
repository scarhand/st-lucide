import { newSpecPage } from '@stencil/core/testing';
import { IconLampWallDown } from '../lamp-wall-down';
import { createElement, LampWallDown }  from 'lucide';

describe('icon-lamp-wall-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLampWallDown],
      html: `<icon-lamp-wall-down></icon-lamp-wall-down>`,
    });

    const svg = createElement(LampWallDown);

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp-wall-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampWallDown],
      html: `<icon-lamp-wall-down stroke="blue"></icon-lamp-wall-down>`,
    });

    const svg = createElement(LampWallDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp-wall-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampWallDown],
      html: `<icon-lamp-wall-down stroke-width="2"></icon-lamp-wall-down>`,
    });

    const svg = createElement(LampWallDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp-wall-down>
    `);
  });
});
