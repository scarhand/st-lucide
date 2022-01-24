import { newSpecPage } from '@stencil/core/testing';
import { IconPencil } from '../pencil';
import { createElement, Pencil }  from 'lucide';

describe('icon-pencil', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPencil],
      html: `<icon-pencil></icon-pencil>`,
    });

    const svg = createElement(Pencil);

    expect(page.root).toEqualHtml(`
      <icon-pencil class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pencil>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPencil],
      html: `<icon-pencil stroke="blue"></icon-pencil>`,
    });

    const svg = createElement(Pencil);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pencil class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pencil>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPencil],
      html: `<icon-pencil stroke-width="2"></icon-pencil>`,
    });

    const svg = createElement(Pencil);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pencil class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pencil>
    `);
  });
});
