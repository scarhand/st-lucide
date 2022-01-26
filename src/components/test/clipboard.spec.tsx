import { newSpecPage } from '@stencil/core/testing';
import { IconClipboard } from '../clipboard';
import { createElement, Clipboard }  from 'lucide';

describe('icon-clipboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconClipboard],
      html: `<icon-clipboard></icon-clipboard>`,
    });

    const svg = createElement(Clipboard);

    expect(page.root).toEqualHtml(`
      <icon-clipboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-clipboard>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboard],
      html: `<icon-clipboard stroke="blue"></icon-clipboard>`,
    });

    const svg = createElement(Clipboard);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-clipboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-clipboard>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconClipboard],
      html: `<icon-clipboard stroke-width="2"></icon-clipboard>`,
    });

    const svg = createElement(Clipboard);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-clipboard class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-clipboard>
    `);
  });
});
