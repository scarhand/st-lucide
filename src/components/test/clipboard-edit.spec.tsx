import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardEdit } from '../clipboard-edit';
import { createElement, ClipboardEdit }  from 'lucide';

describe('icon-clipboard-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardEdit],
      html: `<icon-clipboard-edit></icon-clipboard-edit>`,
    });

    const svg = createElement(ClipboardEdit);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-edit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardEdit],
      html: `<icon-clipboard-edit stroke="blue"></icon-clipboard-edit>`,
    });

    const svg = createElement(ClipboardEdit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-edit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardEdit],
      html: `<icon-clipboard-edit stroke-width="2"></icon-clipboard-edit>`,
    });

    const svg = createElement(ClipboardEdit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-edit>
    `);
  });
});
