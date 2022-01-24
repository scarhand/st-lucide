import { newSpecPage } from '@stencil/core/testing';
import { IconAlignRight } from '../align-right';
import { createElement, AlignRight }  from 'lucide';

describe('icon-align-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignRight],
      html: `<icon-align-right></icon-align-right>`,
    });

    const svg = createElement(AlignRight);

    expect(page.root).toEqualHtml(`
      <icon-align-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignRight],
      html: `<icon-align-right stroke="blue"></icon-align-right>`,
    });

    const svg = createElement(AlignRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignRight],
      html: `<icon-align-right stroke-width="2"></icon-align-right>`,
    });

    const svg = createElement(AlignRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-right>
    `);
  });
});
