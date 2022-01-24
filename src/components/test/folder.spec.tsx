import { newSpecPage } from '@stencil/core/testing';
import { IconFolder } from '../folder';
import { createElement, Folder }  from 'lucide';

describe('icon-folder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFolder],
      html: `<icon-folder></icon-folder>`,
    });

    const svg = createElement(Folder);

    expect(page.root).toEqualHtml(`
      <icon-folder class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-folder>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolder],
      html: `<icon-folder stroke="blue"></icon-folder>`,
    });

    const svg = createElement(Folder);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-folder class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-folder>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFolder],
      html: `<icon-folder stroke-width="2"></icon-folder>`,
    });

    const svg = createElement(Folder);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-folder class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-folder>
    `);
  });
});
