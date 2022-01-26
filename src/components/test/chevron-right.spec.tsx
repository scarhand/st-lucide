import { newSpecPage } from '@stencil/core/testing';
import { IconChevronRight } from '../chevron-right';
import { createElement, ChevronRight }  from 'lucide';

describe('icon-chevron-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronRight],
      html: `<icon-chevron-right></icon-chevron-right>`,
    });

    const svg = createElement(ChevronRight);

    expect(page.root).toEqualHtml(`
      <icon-chevron-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronRight],
      html: `<icon-chevron-right stroke="blue"></icon-chevron-right>`,
    });

    const svg = createElement(ChevronRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronRight],
      html: `<icon-chevron-right stroke-width="2"></icon-chevron-right>`,
    });

    const svg = createElement(ChevronRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-right>
    `);
  });
});
