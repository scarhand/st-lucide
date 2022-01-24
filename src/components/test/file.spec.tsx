import { newSpecPage } from '@stencil/core/testing';
import { IconFile } from '../file';
import { createElement, File }  from 'lucide';

describe('icon-file', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFile],
      html: `<icon-file></icon-file>`,
    });

    const svg = createElement(File);

    expect(page.root).toEqualHtml(`
      <icon-file class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-file>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFile],
      html: `<icon-file stroke="blue"></icon-file>`,
    });

    const svg = createElement(File);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-file class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-file>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFile],
      html: `<icon-file stroke-width="2"></icon-file>`,
    });

    const svg = createElement(File);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-file class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-file>
    `);
  });
});
