import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalJustifyCenter } from '../align-horizontal-justify-center';
import { createElement, AlignHorizontalJustifyCenter }  from 'lucide';

describe('icon-align-horizontal-justify-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyCenter],
      html: `<icon-align-horizontal-justify-center></icon-align-horizontal-justify-center>`,
    });

    const svg = createElement(AlignHorizontalJustifyCenter);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-center>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyCenter],
      html: `<icon-align-horizontal-justify-center stroke="blue"></icon-align-horizontal-justify-center>`,
    });

    const svg = createElement(AlignHorizontalJustifyCenter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-center>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyCenter],
      html: `<icon-align-horizontal-justify-center stroke-width="2"></icon-align-horizontal-justify-center>`,
    });

    const svg = createElement(AlignHorizontalJustifyCenter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-center>
    `);
  });
});
