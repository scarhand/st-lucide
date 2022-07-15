import { newSpecPage } from '@stencil/core/testing';
import { IconFileDown } from '../file-down';
import { createElement, FileDown }  from 'lucide';

describe('icon-file-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFileDown],
      html: `<icon-file-down></icon-file-down>`,
    });

    const svg = createElement(FileDown);

    expect(page.root).toEqualHtml(`
      <icon-file-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDown],
      html: `<icon-file-down stroke="blue"></icon-file-down>`,
    });

    const svg = createElement(FileDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFileDown],
      html: `<icon-file-down stroke-width="2"></icon-file-down>`,
    });

    const svg = createElement(FileDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file-down>
    `);
  });
});
