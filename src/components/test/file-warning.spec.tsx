import { newSpecPage } from '@stencil/core/testing';
import { IconFileWarning } from '../file-warning';
import { createElement, FileWarning }  from 'lucide';

describe('icon-file-warning', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileWarning],
      html: `<icon-file-warning></icon-file-warning>`,
    });

    const svg = createElement(FileWarning);

    expect(page.root).toEqualHtml(`
      <icon-file-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-warning>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileWarning],
      html: `<icon-file-warning stroke="blue"></icon-file-warning>`,
    });

    const svg = createElement(FileWarning);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-warning>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileWarning],
      html: `<icon-file-warning stroke-width="2"></icon-file-warning>`,
    });

    const svg = createElement(FileWarning);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-warning class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-warning>
    `);
  });
});
