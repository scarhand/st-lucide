import { newSpecPage } from '@stencil/core/testing';
import { IconAlignJustify } from '../align-justify';
import { createElement, AlignJustify }  from 'lucide';

describe('icon-align-justify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignJustify],
      html: `<icon-align-justify></icon-align-justify>`,
    });

    const svg = createElement(AlignJustify);

    expect(page.root).toEqualHtml(`
      <icon-align-justify class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-justify>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignJustify],
      html: `<icon-align-justify stroke="blue"></icon-align-justify>`,
    });

    const svg = createElement(AlignJustify);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-justify class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-justify>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignJustify],
      html: `<icon-align-justify stroke-width="2"></icon-align-justify>`,
    });

    const svg = createElement(AlignJustify);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-justify class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-justify>
    `);
  });
});
