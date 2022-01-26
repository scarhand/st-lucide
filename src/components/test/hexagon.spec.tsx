import { newSpecPage } from '@stencil/core/testing';
import { IconHexagon } from '../hexagon';
import { createElement, Hexagon }  from 'lucide';

describe('icon-hexagon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHexagon],
      html: `<icon-hexagon></icon-hexagon>`,
    });

    const svg = createElement(Hexagon);

    expect(page.root).toEqualHtml(`
      <icon-hexagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hexagon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHexagon],
      html: `<icon-hexagon stroke="blue"></icon-hexagon>`,
    });

    const svg = createElement(Hexagon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hexagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hexagon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHexagon],
      html: `<icon-hexagon stroke-width="2"></icon-hexagon>`,
    });

    const svg = createElement(Hexagon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hexagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hexagon>
    `);
  });
});
