import { newSpecPage } from '@stencil/core/testing';
import { IconLamp } from '../lamp';
import { createElement, Lamp }  from 'lucide';

describe('icon-lamp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLamp],
      html: `<icon-lamp></icon-lamp>`,
    });

    const svg = createElement(Lamp);

    expect(page.root).toEqualHtml(`
      <icon-lamp class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lamp>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLamp],
      html: `<icon-lamp stroke="blue"></icon-lamp>`,
    });

    const svg = createElement(Lamp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lamp class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lamp>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLamp],
      html: `<icon-lamp stroke-width="2"></icon-lamp>`,
    });

    const svg = createElement(Lamp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lamp class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lamp>
    `);
  });
});
