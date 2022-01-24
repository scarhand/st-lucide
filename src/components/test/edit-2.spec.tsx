import { newSpecPage } from '@stencil/core/testing';
import { IconEdit2 } from '../edit-2';
import { createElement, Edit2 }  from 'lucide';

describe('icon-edit-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEdit2],
      html: `<icon-edit-2></icon-edit-2>`,
    });

    const svg = createElement(Edit2);

    expect(page.root).toEqualHtml(`
      <icon-edit-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-edit-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit2],
      html: `<icon-edit-2 stroke="blue"></icon-edit-2>`,
    });

    const svg = createElement(Edit2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-edit-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-edit-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit2],
      html: `<icon-edit-2 stroke-width="2"></icon-edit-2>`,
    });

    const svg = createElement(Edit2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-edit-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-edit-2>
    `);
  });
});
