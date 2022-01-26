import { newSpecPage } from '@stencil/core/testing';
import { IconGavel } from '../gavel';
import { createElement, Gavel }  from 'lucide';

describe('icon-gavel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGavel],
      html: `<icon-gavel></icon-gavel>`,
    });

    const svg = createElement(Gavel);

    expect(page.root).toEqualHtml(`
      <icon-gavel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gavel>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGavel],
      html: `<icon-gavel stroke="blue"></icon-gavel>`,
    });

    const svg = createElement(Gavel);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gavel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gavel>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGavel],
      html: `<icon-gavel stroke-width="2"></icon-gavel>`,
    });

    const svg = createElement(Gavel);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gavel class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gavel>
    `);
  });
});
