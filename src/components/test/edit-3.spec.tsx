import { newSpecPage } from '@stencil/core/testing';
import { IconEdit3 } from '../edit-3';
import { createElement, Edit3 }  from 'lucide';

describe('icon-edit-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEdit3],
      html: `<icon-edit-3></icon-edit-3>`,
    });

    const svg = createElement(Edit3);

    expect(page.root).toEqualHtml(`
      <icon-edit-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-edit-3>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit3],
      html: `<icon-edit-3 stroke="blue"></icon-edit-3>`,
    });

    const svg = createElement(Edit3);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-edit-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-edit-3>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit3],
      html: `<icon-edit-3 stroke-width="2"></icon-edit-3>`,
    });

    const svg = createElement(Edit3);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-edit-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-edit-3>
    `);
  });
});
