import { newSpecPage } from '@stencil/core/testing';
import { IconFileEdit } from '../file-edit';
import { createElement, FileEdit }  from 'lucide';

describe('icon-file-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileEdit],
      html: `<icon-file-edit></icon-file-edit>`,
    });

    const svg = createElement(FileEdit);

    expect(page.root).toEqualHtml(`
      <icon-file-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-edit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileEdit],
      html: `<icon-file-edit stroke="blue"></icon-file-edit>`,
    });

    const svg = createElement(FileEdit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-edit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileEdit],
      html: `<icon-file-edit stroke-width="2"></icon-file-edit>`,
    });

    const svg = createElement(FileEdit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-edit>
    `);
  });
});
