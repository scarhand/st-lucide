import { newSpecPage } from '@stencil/core/testing';
import { IconFileCheck } from '../file-check';
import { createElement, FileCheck }  from 'lucide';

describe('icon-file-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileCheck],
      html: `<icon-file-check></icon-file-check>`,
    });

    const svg = createElement(FileCheck);

    expect(page.root).toEqualHtml(`
      <icon-file-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCheck],
      html: `<icon-file-check stroke="blue"></icon-file-check>`,
    });

    const svg = createElement(FileCheck);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileCheck],
      html: `<icon-file-check stroke-width="2"></icon-file-check>`,
    });

    const svg = createElement(FileCheck);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-check>
    `);
  });
});
