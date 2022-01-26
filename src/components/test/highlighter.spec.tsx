import { newSpecPage } from '@stencil/core/testing';
import { IconHighlighter } from '../highlighter';
import { createElement, Highlighter }  from 'lucide';

describe('icon-highlighter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHighlighter],
      html: `<icon-highlighter></icon-highlighter>`,
    });

    const svg = createElement(Highlighter);

    expect(page.root).toEqualHtml(`
      <icon-highlighter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-highlighter>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHighlighter],
      html: `<icon-highlighter stroke="blue"></icon-highlighter>`,
    });

    const svg = createElement(Highlighter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-highlighter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-highlighter>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHighlighter],
      html: `<icon-highlighter stroke-width="2"></icon-highlighter>`,
    });

    const svg = createElement(Highlighter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-highlighter class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-highlighter>
    `);
  });
});
