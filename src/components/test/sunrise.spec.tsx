import { newSpecPage } from '@stencil/core/testing';
import { IconSunrise } from '../sunrise';
import { createElement, Sunrise }  from 'lucide';

describe('icon-sunrise', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunrise],
      html: `<icon-sunrise></icon-sunrise>`,
    });

    const svg = createElement(Sunrise);

    expect(page.root).toEqualHtml(`
      <icon-sunrise class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sunrise>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunrise],
      html: `<icon-sunrise stroke="blue"></icon-sunrise>`,
    });

    const svg = createElement(Sunrise);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sunrise class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sunrise>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunrise],
      html: `<icon-sunrise stroke-width="2"></icon-sunrise>`,
    });

    const svg = createElement(Sunrise);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sunrise class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sunrise>
    `);
  });
});
