import { newSpecPage } from '@stencil/core/testing';
import { IconFileDiff } from '../file-diff';
import { createElement, FileDiff }  from 'lucide';

describe('icon-file-diff', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileDiff],
      html: `<icon-file-diff></icon-file-diff>`,
    });

    const svg = createElement(FileDiff);

    expect(page.root).toEqualHtml(`
      <icon-file-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-diff>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDiff],
      html: `<icon-file-diff stroke="blue"></icon-file-diff>`,
    });

    const svg = createElement(FileDiff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-diff>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDiff],
      html: `<icon-file-diff stroke-width="2"></icon-file-diff>`,
    });

    const svg = createElement(FileDiff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-diff class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-diff>
    `);
  });
});
