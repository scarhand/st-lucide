import { newSpecPage } from '@stencil/core/testing';
import { IconEdit } from '../edit';
import { createElement, Edit }  from 'lucide';

describe('icon-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEdit],
      html: `<icon-edit></icon-edit>`,
    });

    const svg = createElement(Edit);

    expect(page.root).toEqualHtml(`
      <icon-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-edit>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit],
      html: `<icon-edit stroke="blue"></icon-edit>`,
    });

    const svg = createElement(Edit);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-edit>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEdit],
      html: `<icon-edit stroke-width="2"></icon-edit>`,
    });

    const svg = createElement(Edit);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-edit class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-edit>
    `);
  });
});
