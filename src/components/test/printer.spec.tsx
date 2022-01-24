import { newSpecPage } from '@stencil/core/testing';
import { IconPrinter } from '../printer';
import { createElement, Printer }  from 'lucide';

describe('icon-printer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPrinter],
      html: `<icon-printer></icon-printer>`,
    });

    const svg = createElement(Printer);

    expect(page.root).toEqualHtml(`
      <icon-printer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-printer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPrinter],
      html: `<icon-printer stroke="blue"></icon-printer>`,
    });

    const svg = createElement(Printer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-printer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-printer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPrinter],
      html: `<icon-printer stroke-width="2"></icon-printer>`,
    });

    const svg = createElement(Printer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-printer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-printer>
    `);
  });
});
