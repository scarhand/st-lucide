import { newSpecPage } from '@stencil/core/testing';
import { IconAlignVerticalJustifyStart } from '../align-vertical-justify-start';
import { createElement, AlignVerticalJustifyStart }  from 'lucide';

describe('icon-align-vertical-justify-start', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyStart],
      html: `<icon-align-vertical-justify-start></icon-align-vertical-justify-start>`,
    });

    const svg = createElement(AlignVerticalJustifyStart);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-vertical-justify-start>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyStart],
      html: `<icon-align-vertical-justify-start stroke="blue"></icon-align-vertical-justify-start>`,
    });

    const svg = createElement(AlignVerticalJustifyStart);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-vertical-justify-start>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignVerticalJustifyStart],
      html: `<icon-align-vertical-justify-start stroke-width="2"></icon-align-vertical-justify-start>`,
    });

    const svg = createElement(AlignVerticalJustifyStart);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-vertical-justify-start class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-vertical-justify-start>
    `);
  });
});
