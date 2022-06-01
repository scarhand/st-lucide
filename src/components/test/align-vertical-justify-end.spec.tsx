import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalJustifyEnd } from '../align-vertical-justify-end';
import { createElement, AlignVerticalJustifyEnd }  from 'lucide';

describe('icon-align-vertical-justify-end', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyEnd],
      html: `<icon-align-vertical-justify-end></icon-align-vertical-justify-end>`,
    });

    const svg = createElement(AlignVerticalJustifyEnd);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-justify-end>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyEnd],
      html: `<icon-align-vertical-justify-end stroke="blue"></icon-align-vertical-justify-end>`,
    });

    const svg = createElement(AlignVerticalJustifyEnd);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-justify-end>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyEnd],
      html: `<icon-align-vertical-justify-end stroke-width="2"></icon-align-vertical-justify-end>`,
    });

    const svg = createElement(AlignVerticalJustifyEnd);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-end class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-justify-end>
    `);
  });
});
