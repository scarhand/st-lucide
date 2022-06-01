import { newSpecPage } from '@stencil/core/testing';
import { IconTextCursor } from '../text-cursor';
import { createElement, TextCursor }  from 'lucide';

describe('icon-text-cursor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTextCursor],
      html: `<icon-text-cursor></icon-text-cursor>`,
    });

    const svg = createElement(TextCursor);

    expect(page.root).toEqualHtml(`
      <icon-text-cursor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-text-cursor>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTextCursor],
      html: `<icon-text-cursor stroke="blue"></icon-text-cursor>`,
    });

    const svg = createElement(TextCursor);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-text-cursor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-text-cursor>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTextCursor],
      html: `<icon-text-cursor stroke-width="2"></icon-text-cursor>`,
    });

    const svg = createElement(TextCursor);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-text-cursor class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-text-cursor>
    `);
  });
});
