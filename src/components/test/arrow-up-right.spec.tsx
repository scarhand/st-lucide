import { newSpecPage } from '@stencil/core/testing';
import { IconArrowUpRight } from '../arrow-up-right';
import { createElement, ArrowUpRight }  from 'lucide';

describe('icon-arrow-up-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpRight],
      html: `<icon-arrow-up-right></icon-arrow-up-right>`,
    });

    const svg = createElement(ArrowUpRight);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-up-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpRight],
      html: `<icon-arrow-up-right stroke="blue"></icon-arrow-up-right>`,
    });

    const svg = createElement(ArrowUpRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-up-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowUpRight],
      html: `<icon-arrow-up-right stroke-width="2"></icon-arrow-up-right>`,
    });

    const svg = createElement(ArrowUpRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-up-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-up-right>
    `);
  });
});
