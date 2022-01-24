import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardX } from '../clipboard-x';
import { createElement, ClipboardX }  from 'lucide';

describe('icon-clipboard-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardX],
      html: `<icon-clipboard-x></icon-clipboard-x>`,
    });

    const svg = createElement(ClipboardX);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardX],
      html: `<icon-clipboard-x stroke="blue"></icon-clipboard-x>`,
    });

    const svg = createElement(ClipboardX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardX],
      html: `<icon-clipboard-x stroke-width="2"></icon-clipboard-x>`,
    });

    const svg = createElement(ClipboardX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-x>
    `);
  });
});
