import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalJustifyEnd } from '../align-horizontal-justify-end';
import { createElement, AlignHorizontalJustifyEnd }  from 'lucide';

describe('icon-align-horizontal-justify-end', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyEnd],
      html: `<icon-align-horizontal-justify-end></icon-align-horizontal-justify-end>`,
    });

    const svg = createElement(AlignHorizontalJustifyEnd);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-end>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyEnd],
      html: `<icon-align-horizontal-justify-end stroke="blue"></icon-align-horizontal-justify-end>`,
    });

    const svg = createElement(AlignHorizontalJustifyEnd);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-end>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyEnd],
      html: `<icon-align-horizontal-justify-end stroke-width="2"></icon-align-horizontal-justify-end>`,
    });

    const svg = createElement(AlignHorizontalJustifyEnd);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-end>
    `);
  });
});
