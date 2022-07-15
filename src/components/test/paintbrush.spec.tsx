import { newSpecPage } from '@stencil/core/testing';
import { IconPaintbrush } from '../paintbrush';
import { createElement, Paintbrush }  from 'lucide';

describe('icon-paintbrush', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush],
      html: `<icon-paintbrush></icon-paintbrush>`,
    });

    const svg = createElement(Paintbrush);

    expect(page.root).toEqualHtml(`
      <icon-paintbrush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-paintbrush>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush],
      html: `<icon-paintbrush stroke="blue"></icon-paintbrush>`,
    });

    const svg = createElement(Paintbrush);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-paintbrush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-paintbrush>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaintbrush],
      html: `<icon-paintbrush stroke-width="2"></icon-paintbrush>`,
    });

    const svg = createElement(Paintbrush);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-paintbrush class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-paintbrush>
    `);
  });
});
