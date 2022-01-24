import { newSpecPage } from '@stencil/core/testing';
import { IconTrash } from '../trash';
import { createElement, Trash }  from 'lucide';

describe('icon-trash', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrash],
      html: `<icon-trash></icon-trash>`,
    });

    const svg = createElement(Trash);

    expect(page.root).toEqualHtml(`
      <icon-trash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trash>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrash],
      html: `<icon-trash stroke="blue"></icon-trash>`,
    });

    const svg = createElement(Trash);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trash>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrash],
      html: `<icon-trash stroke-width="2"></icon-trash>`,
    });

    const svg = createElement(Trash);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trash class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trash>
    `);
  });
});
