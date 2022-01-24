import { newSpecPage } from '@stencil/core/testing';
import { IconChevronFirst } from '../chevron-first';
import { createElement, ChevronFirst }  from 'lucide';

describe('icon-chevron-first', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronFirst],
      html: `<icon-chevron-first></icon-chevron-first>`,
    });

    const svg = createElement(ChevronFirst);

    expect(page.root).toEqualHtml(`
      <icon-chevron-first class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-first>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronFirst],
      html: `<icon-chevron-first stroke="blue"></icon-chevron-first>`,
    });

    const svg = createElement(ChevronFirst);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-first class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-first>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronFirst],
      html: `<icon-chevron-first stroke-width="2"></icon-chevron-first>`,
    });

    const svg = createElement(ChevronFirst);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-first class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-first>
    `);
  });
});
