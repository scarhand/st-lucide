import { newSpecPage } from '@stencil/core/testing';
import { IconArrowDown } from '../arrow-down';
import { createElement, ArrowDown }  from 'lucide';

describe('icon-arrow-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowDown],
      html: `<icon-arrow-down></icon-arrow-down>`,
    });

    const svg = createElement(ArrowDown);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDown],
      html: `<icon-arrow-down stroke="blue"></icon-arrow-down>`,
    });

    const svg = createElement(ArrowDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDown],
      html: `<icon-arrow-down stroke-width="2"></icon-arrow-down>`,
    });

    const svg = createElement(ArrowDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-down>
    `);
  });
});
