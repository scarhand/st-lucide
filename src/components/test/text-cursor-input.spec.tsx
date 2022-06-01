import { newSpecPage } from '@stencil/core/testing';
import { IconTextCursorInput } from '../text-cursor-input';
import { createElement, TextCursorInput }  from 'lucide';

describe('icon-text-cursor-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTextCursorInput],
      html: `<icon-text-cursor-input></icon-text-cursor-input>`,
    });

    const svg = createElement(TextCursorInput);

    expect(page.root).toEqualHtml(`
      <icon-text-cursor-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-text-cursor-input>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTextCursorInput],
      html: `<icon-text-cursor-input stroke="blue"></icon-text-cursor-input>`,
    });

    const svg = createElement(TextCursorInput);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-text-cursor-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-text-cursor-input>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTextCursorInput],
      html: `<icon-text-cursor-input stroke-width="2"></icon-text-cursor-input>`,
    });

    const svg = createElement(TextCursorInput);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-text-cursor-input class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-text-cursor-input>
    `);
  });
});
