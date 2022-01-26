import { newSpecPage } from '@stencil/core/testing';
import { IconFileText } from '../file-text';
import { createElement, FileText }  from 'lucide';

describe('icon-file-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileText],
      html: `<icon-file-text></icon-file-text>`,
    });

    const svg = createElement(FileText);

    expect(page.root).toEqualHtml(`
      <icon-file-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-text>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileText],
      html: `<icon-file-text stroke="blue"></icon-file-text>`,
    });

    const svg = createElement(FileText);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-text>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileText],
      html: `<icon-file-text stroke-width="2"></icon-file-text>`,
    });

    const svg = createElement(FileText);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-text class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-text>
    `);
  });
});
