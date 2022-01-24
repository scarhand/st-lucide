import { newSpecPage } from '@stencil/core/testing';
import { IconTrash2 } from '../trash-2';
import { createElement, Trash2 }  from 'lucide';

describe('icon-trash-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrash2],
      html: `<icon-trash-2></icon-trash-2>`,
    });

    const svg = createElement(Trash2);

    expect(page.root).toEqualHtml(`
      <icon-trash-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trash-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrash2],
      html: `<icon-trash-2 stroke="blue"></icon-trash-2>`,
    });

    const svg = createElement(Trash2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trash-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trash-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrash2],
      html: `<icon-trash-2 stroke-width="2"></icon-trash-2>`,
    });

    const svg = createElement(Trash2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trash-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trash-2>
    `);
  });
});
