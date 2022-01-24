import { newSpecPage } from '@stencil/core/testing';
import { IconSeparatorHorizontal } from '../separator-horizontal';
import { createElement, SeparatorHorizontal }  from 'lucide';

describe('icon-separator-horizontal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorHorizontal],
      html: `<icon-separator-horizontal></icon-separator-horizontal>`,
    });

    const svg = createElement(SeparatorHorizontal);

    expect(page.root).toEqualHtml(`
      <icon-separator-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-separator-horizontal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorHorizontal],
      html: `<icon-separator-horizontal stroke="blue"></icon-separator-horizontal>`,
    });

    const svg = createElement(SeparatorHorizontal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-separator-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-separator-horizontal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSeparatorHorizontal],
      html: `<icon-separator-horizontal stroke-width="2"></icon-separator-horizontal>`,
    });

    const svg = createElement(SeparatorHorizontal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-separator-horizontal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-separator-horizontal>
    `);
  });
});
