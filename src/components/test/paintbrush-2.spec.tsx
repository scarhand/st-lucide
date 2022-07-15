import { newSpecPage } from '@stencil/core/testing';
import { IconPaintbrush2 } from '../paintbrush-2';
import { createElement, Paintbrush2 }  from 'lucide';

describe('icon-paintbrush-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush2],
      html: `<icon-paintbrush-2></icon-paintbrush-2>`,
    });

    const svg = createElement(Paintbrush2);

    expect(page.root).toEqualHtml(`
      <icon-paintbrush-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-paintbrush-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush2],
      html: `<icon-paintbrush-2 stroke="blue"></icon-paintbrush-2>`,
    });

    const svg = createElement(Paintbrush2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-paintbrush-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-paintbrush-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush2],
      html: `<icon-paintbrush-2 stroke-width="2"></icon-paintbrush-2>`,
    });

    const svg = createElement(Paintbrush2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-paintbrush-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-paintbrush-2>
    `);
  });
});
