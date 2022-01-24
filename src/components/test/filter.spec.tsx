import { newSpecPage } from '@stencil/core/testing';
import { IconFilter } from '../filter';
import { createElement, Filter }  from 'lucide';

describe('icon-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFilter],
      html: `<icon-filter></icon-filter>`,
    });

    const svg = createElement(Filter);

    expect(page.root).toEqualHtml(`
      <icon-filter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-filter>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilter],
      html: `<icon-filter stroke="blue"></icon-filter>`,
    });

    const svg = createElement(Filter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-filter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-filter>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFilter],
      html: `<icon-filter stroke-width="2"></icon-filter>`,
    });

    const svg = createElement(Filter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-filter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-filter>
    `);
  });
});
