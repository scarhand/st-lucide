import { newSpecPage } from '@stencil/core/testing';
import { IconAlignHorizontalJustifyStart } from '../align-horizontal-justify-start';
import { createElement, AlignHorizontalJustifyStart }  from 'lucide';

describe('icon-align-horizontal-justify-start', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyStart],
      html: `<icon-align-horizontal-justify-start></icon-align-horizontal-justify-start>`,
    });

    const svg = createElement(AlignHorizontalJustifyStart);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-start>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyStart],
      html: `<icon-align-horizontal-justify-start stroke="blue"></icon-align-horizontal-justify-start>`,
    });

    const svg = createElement(AlignHorizontalJustifyStart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-start>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignHorizontalJustifyStart],
      html: `<icon-align-horizontal-justify-start stroke-width="2"></icon-align-horizontal-justify-start>`,
    });

    const svg = createElement(AlignHorizontalJustifyStart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-horizontal-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-horizontal-justify-start>
    `);
  });
});
