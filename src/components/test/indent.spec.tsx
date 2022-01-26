import { newSpecPage } from '@stencil/core/testing';
import { IconIndent } from '../indent';
import { createElement, Indent }  from 'lucide';

describe('icon-indent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconIndent],
      html: `<icon-indent></icon-indent>`,
    });

    const svg = createElement(Indent);

    expect(page.root).toEqualHtml(`
      <icon-indent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-indent>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIndent],
      html: `<icon-indent stroke="blue"></icon-indent>`,
    });

    const svg = createElement(Indent);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-indent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-indent>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconIndent],
      html: `<icon-indent stroke-width="2"></icon-indent>`,
    });

    const svg = createElement(Indent);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-indent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-indent>
    `);
  });
});
