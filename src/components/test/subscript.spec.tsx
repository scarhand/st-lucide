import { newSpecPage } from '@stencil/core/testing';
import { IconSubscript } from '../subscript';
import { createElement, Subscript }  from 'lucide';

describe('icon-subscript', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSubscript],
      html: `<icon-subscript></icon-subscript>`,
    });

    const svg = createElement(Subscript);

    expect(page.root).toEqualHtml(`
      <icon-subscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-subscript>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSubscript],
      html: `<icon-subscript stroke="blue"></icon-subscript>`,
    });

    const svg = createElement(Subscript);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-subscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-subscript>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSubscript],
      html: `<icon-subscript stroke-width="2"></icon-subscript>`,
    });

    const svg = createElement(Subscript);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-subscript class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-subscript>
    `);
  });
});
