import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalJustifyCenter } from '../align-vertical-justify-center';
import { createElement, AlignVerticalJustifyCenter }  from 'lucide';

describe('icon-align-vertical-justify-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyCenter],
      html: `<icon-align-vertical-justify-center></icon-align-vertical-justify-center>`,
    });

    const svg = createElement(AlignVerticalJustifyCenter);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-justify-center>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyCenter],
      html: `<icon-align-vertical-justify-center stroke="blue"></icon-align-vertical-justify-center>`,
    });

    const svg = createElement(AlignVerticalJustifyCenter);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-justify-center>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyCenter],
      html: `<icon-align-vertical-justify-center stroke-width="2"></icon-align-vertical-justify-center>`,
    });

    const svg = createElement(AlignVerticalJustifyCenter);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-center class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-justify-center>
    `);
  });
});
