import { newSpecPage } from '@stencil/core/testing';
import { IconChevronUp } from '../chevron-up';
import { createElement, ChevronUp }  from 'lucide';

describe('icon-chevron-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronUp],
      html: `<icon-chevron-up></icon-chevron-up>`,
    });

    const svg = createElement(ChevronUp);

    expect(page.root).toEqualHtml(`
      <icon-chevron-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-up>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronUp],
      html: `<icon-chevron-up stroke="blue"></icon-chevron-up>`,
    });

    const svg = createElement(ChevronUp);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-up>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronUp],
      html: `<icon-chevron-up stroke-width="2"></icon-chevron-up>`,
    });

    const svg = createElement(ChevronUp);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-up class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-up>
    `);
  });
});
