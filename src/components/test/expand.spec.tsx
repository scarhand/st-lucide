import { newSpecPage } from '@stencil/core/testing';
import { IconExpand } from '../expand';
import { createElement, Expand }  from 'lucide';

describe('icon-expand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconExpand],
      html: `<icon-expand></icon-expand>`,
    });

    const svg = createElement(Expand);

    expect(page.root).toEqualHtml(`
      <icon-expand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-expand>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconExpand],
      html: `<icon-expand stroke="blue"></icon-expand>`,
    });

    const svg = createElement(Expand);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-expand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-expand>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconExpand],
      html: `<icon-expand stroke-width="2"></icon-expand>`,
    });

    const svg = createElement(Expand);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-expand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-expand>
    `);
  });
});
