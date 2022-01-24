import { newSpecPage } from '@stencil/core/testing';
import { IconChevronLeft } from '../chevron-left';
import { createElement, ChevronLeft }  from 'lucide';

describe('icon-chevron-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronLeft],
      html: `<icon-chevron-left></icon-chevron-left>`,
    });

    const svg = createElement(ChevronLeft);

    expect(page.root).toEqualHtml(`
      <icon-chevron-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronLeft],
      html: `<icon-chevron-left stroke="blue"></icon-chevron-left>`,
    });

    const svg = createElement(ChevronLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronLeft],
      html: `<icon-chevron-left stroke-width="2"></icon-chevron-left>`,
    });

    const svg = createElement(ChevronLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-left>
    `);
  });
});
