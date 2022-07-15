import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardSignature } from '../clipboard-signature';
import { createElement, ClipboardSignature }  from 'lucide';

describe('icon-clipboard-signature', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardSignature],
      html: `<icon-clipboard-signature></icon-clipboard-signature>`,
    });

    const svg = createElement(ClipboardSignature);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-signature>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardSignature],
      html: `<icon-clipboard-signature stroke="blue"></icon-clipboard-signature>`,
    });

    const svg = createElement(ClipboardSignature);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-signature>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardSignature],
      html: `<icon-clipboard-signature stroke-width="2"></icon-clipboard-signature>`,
    });

    const svg = createElement(ClipboardSignature);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-signature class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-signature>
    `);
  });
});
