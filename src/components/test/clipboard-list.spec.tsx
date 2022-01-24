import { newSpecPage } from '@stencil/core/testing';
import { IconClipboardList } from '../clipboard-list';
import { createElement, ClipboardList }  from 'lucide';

describe('icon-clipboard-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboardList],
      html: `<icon-clipboard-list></icon-clipboard-list>`,
    });

    const svg = createElement(ClipboardList);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard-list>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardList],
      html: `<icon-clipboard-list stroke="blue"></icon-clipboard-list>`,
    });

    const svg = createElement(ClipboardList);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard-list>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboardList],
      html: `<icon-clipboard-list stroke-width="2"></icon-clipboard-list>`,
    });

    const svg = createElement(ClipboardList);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard-list class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard-list>
    `);
  });
});
