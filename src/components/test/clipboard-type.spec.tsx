import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardType } from '../clipboard-type';
import { createElement, ClipboardType }  from 'lucide';

describe('icon-clipboard-type', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardType],
      html: `<icon-clipboard-type></icon-clipboard-type>`,
    });

    const svg = createElement(ClipboardType);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-type>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardType],
      html: `<icon-clipboard-type stroke="blue"></icon-clipboard-type>`,
    });

    const svg = createElement(ClipboardType);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-type>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardType],
      html: `<icon-clipboard-type stroke-width="2"></icon-clipboard-type>`,
    });

    const svg = createElement(ClipboardType);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-type class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-type>
    `);
  });
});
