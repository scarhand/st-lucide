import { newSpecPage } from '@stencil/core/testing';
import { IconWaves } from '../waves';
import { createElement, Waves }  from 'lucide';

describe('icon-waves', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWaves],
      html: `<icon-waves></icon-waves>`,
    });

    const svg = createElement(Waves);

    expect(page.root).toEqualHtml(`
      <icon-waves class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-waves>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWaves],
      html: `<icon-waves stroke="blue"></icon-waves>`,
    });

    const svg = createElement(Waves);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-waves class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-waves>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWaves],
      html: `<icon-waves stroke-width="2"></icon-waves>`,
    });

    const svg = createElement(Waves);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-waves class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-waves>
    `);
  });
});
