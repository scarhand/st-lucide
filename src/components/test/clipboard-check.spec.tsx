import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardCheck } from '../clipboard-check';
import { createElement, ClipboardCheck }  from 'lucide';

describe('icon-clipboard-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCheck],
      html: `<icon-clipboard-check></icon-clipboard-check>`,
    });

    const svg = createElement(ClipboardCheck);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCheck],
      html: `<icon-clipboard-check stroke="blue"></icon-clipboard-check>`,
    });

    const svg = createElement(ClipboardCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardCheck],
      html: `<icon-clipboard-check stroke-width="2"></icon-clipboard-check>`,
    });

    const svg = createElement(ClipboardCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-check>
    `);
  });
});
