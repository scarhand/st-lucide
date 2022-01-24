import { newSpecPage } from '@stencil/core/testing';
import { IconChevronDown } from '../chevron-down';
import { createElement, ChevronDown }  from 'lucide';

describe('icon-chevron-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconChevronDown],
      html: `<icon-chevron-down></icon-chevron-down>`,
    });

    const svg = createElement(ChevronDown);

    expect(page.root).toEqualHtml(`
      <icon-chevron-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-chevron-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronDown],
      html: `<icon-chevron-down stroke="blue"></icon-chevron-down>`,
    });

    const svg = createElement(ChevronDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-chevron-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-chevron-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconChevronDown],
      html: `<icon-chevron-down stroke-width="2"></icon-chevron-down>`,
    });

    const svg = createElement(ChevronDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-chevron-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-chevron-down>
    `);
  });
});
