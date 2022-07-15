import { newSpecPage } from '@stencil/core/testing';
import { IconLampWallUp } from '../lamp-wall-up';
import { createElement, LampWallUp }  from 'lucide';

describe('icon-lamp-wall-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLampWallUp],
      html: `<icon-lamp-wall-up></icon-lamp-wall-up>`,
    });

    const svg = createElement(LampWallUp);

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp-wall-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampWallUp],
      html: `<icon-lamp-wall-up stroke="blue"></icon-lamp-wall-up>`,
    });

    const svg = createElement(LampWallUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp-wall-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLampWallUp],
      html: `<icon-lamp-wall-up stroke-width="2"></icon-lamp-wall-up>`,
    });

    const svg = createElement(LampWallUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp-wall-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp-wall-up>
    `);
  });
});
