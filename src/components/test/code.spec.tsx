import { newSpecPage } from '@stencil/core/testing';
import { IconCode } from '../code';
import { createElement, Code }  from 'lucide';

describe('icon-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCode],
      html: `<icon-code></icon-code>`,
    });

    const svg = createElement(Code);

    expect(page.root).toEqualHtml(`
      <icon-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-code>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCode],
      html: `<icon-code stroke="blue"></icon-code>`,
    });

    const svg = createElement(Code);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-code>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCode],
      html: `<icon-code stroke-width="2"></icon-code>`,
    });

    const svg = createElement(Code);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-code class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-code>
    `);
  });
});
