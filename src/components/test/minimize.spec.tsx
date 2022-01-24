import { newSpecPage } from '@stencil/core/testing';
import { IconMinimize } from '../minimize';
import { createElement, Minimize }  from 'lucide';

describe('icon-minimize', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMinimize],
      html: `<icon-minimize></icon-minimize>`,
    });

    const svg = createElement(Minimize);

    expect(page.root).toEqualHtml(`
      <icon-minimize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-minimize>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinimize],
      html: `<icon-minimize stroke="blue"></icon-minimize>`,
    });

    const svg = createElement(Minimize);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-minimize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-minimize>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMinimize],
      html: `<icon-minimize stroke-width="2"></icon-minimize>`,
    });

    const svg = createElement(Minimize);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-minimize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-minimize>
    `);
  });
});
