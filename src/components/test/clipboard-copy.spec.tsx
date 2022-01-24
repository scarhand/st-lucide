import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardCopy } from '../clipboard-copy';
import { createElement, ClipboardCopy }  from 'lucide';

describe('icon-clipboard-copy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCopy],
      html: `<icon-clipboard-copy></icon-clipboard-copy>`,
    });

    const svg = createElement(ClipboardCopy);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-copy>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCopy],
      html: `<icon-clipboard-copy stroke="blue"></icon-clipboard-copy>`,
    });

    const svg = createElement(ClipboardCopy);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-copy>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCopy],
      html: `<icon-clipboard-copy stroke-width="2"></icon-clipboard-copy>`,
    });

    const svg = createElement(ClipboardCopy);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-copy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-copy>
    `);
  });
});
