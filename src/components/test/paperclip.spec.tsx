import { newSpecPage } from '@stencil/core/testing';
import { IconPaperclip } from '../paperclip';
import { createElement, Paperclip }  from 'lucide';

describe('icon-paperclip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPaperclip],
      html: `<icon-paperclip></icon-paperclip>`,
    });

    const svg = createElement(Paperclip);

    expect(page.root).toEqualHtml(`
      <icon-paperclip class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-paperclip>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaperclip],
      html: `<icon-paperclip stroke="blue"></icon-paperclip>`,
    });

    const svg = createElement(Paperclip);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-paperclip class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-paperclip>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPaperclip],
      html: `<icon-paperclip stroke-width="2"></icon-paperclip>`,
    });

    const svg = createElement(Paperclip);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-paperclip class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-paperclip>
    `);
  });
});
