import { newSpecPage } from '@stencil/core/testing';
import { IconAlignStartHorizontal } from '../align-start-horizontal';
import { createElement, AlignStartHorizontal }  from 'lucide';

describe('icon-align-start-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartHorizontal],
      html: `<icon-align-start-horizontal></icon-align-start-horizontal>`,
    });

    const svg = createElement(AlignStartHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-align-start-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-align-start-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartHorizontal],
      html: `<icon-align-start-horizontal stroke="blue"></icon-align-start-horizontal>`,
    });

    const svg = createElement(AlignStartHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-align-start-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-align-start-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAlignStartHorizontal],
      html: `<icon-align-start-horizontal stroke-width="2"></icon-align-start-horizontal>`,
    });

    const svg = createElement(AlignStartHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-align-start-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-align-start-horizontal>
    `);
  });
});
