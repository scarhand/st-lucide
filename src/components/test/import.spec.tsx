import { newSpecPage } from '@stencil/core/testing';
import { IconImport } from '../import';
import { createElement, Import }  from 'lucide';

describe('icon-import', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconImport],
      html: `<icon-import></icon-import>`,
    });

    const svg = createElement(Import);

    expect(page.root).toEqualHtml(`
      <icon-import class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-import>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImport],
      html: `<icon-import stroke="blue"></icon-import>`,
    });

    const svg = createElement(Import);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-import class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-import>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconImport],
      html: `<icon-import stroke-width="2"></icon-import>`,
    });

    const svg = createElement(Import);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-import class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-import>
    `);
  });
});
