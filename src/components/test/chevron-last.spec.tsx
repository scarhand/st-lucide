import { newSpecPage } from '@stencil/core/testing';
import { IconChevronLast } from '../chevron-last';
import { createElement, ChevronLast }  from 'lucide';

describe('icon-chevron-last', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronLast],
      html: `<icon-chevron-last></icon-chevron-last>`,
    });

    const svg = createElement(ChevronLast);

    expect(page.root).toEqualHtml(`
      <icon-chevron-last class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-last>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronLast],
      html: `<icon-chevron-last stroke="blue"></icon-chevron-last>`,
    });

    const svg = createElement(ChevronLast);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-last class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-last>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronLast],
      html: `<icon-chevron-last stroke-width="2"></icon-chevron-last>`,
    });

    const svg = createElement(ChevronLast);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-last class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-last>
    `);
  });
});
