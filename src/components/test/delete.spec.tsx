import { newSpecPage } from '@stencil/core/testing';
import { IconDelete } from '../delete';
import { createElement, Delete }  from 'lucide';

describe('icon-delete', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDelete],
      html: `<icon-delete></icon-delete>`,
    });

    const svg = createElement(Delete);

    expect(page.root).toEqualHtml(`
      <icon-delete class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-delete>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDelete],
      html: `<icon-delete stroke="blue"></icon-delete>`,
    });

    const svg = createElement(Delete);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-delete class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-delete>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDelete],
      html: `<icon-delete stroke-width="2"></icon-delete>`,
    });

    const svg = createElement(Delete);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-delete class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-delete>
    `);
  });
});
