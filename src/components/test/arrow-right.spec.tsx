import { newSpecPage } from '@stencil/core/testing';
import { IconArrowRight } from '../arrow-right';
import { createElement, ArrowRight }  from 'lucide';

describe('icon-arrow-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowRight],
      html: `<icon-arrow-right></icon-arrow-right>`,
    });

    const svg = createElement(ArrowRight);

    expect(page.root).toEqualHtml(`
      <icon-arrow-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowRight],
      html: `<icon-arrow-right stroke="blue"></icon-arrow-right>`,
    });

    const svg = createElement(ArrowRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowRight],
      html: `<icon-arrow-right stroke-width="2"></icon-arrow-right>`,
    });

    const svg = createElement(ArrowRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-right>
    `);
  });
});
