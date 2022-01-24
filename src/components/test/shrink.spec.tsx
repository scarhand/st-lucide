import { newSpecPage } from '@stencil/core/testing';
import { IconShrink } from '../shrink';
import { createElement, Shrink }  from 'lucide';

describe('icon-shrink', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShrink],
      html: `<icon-shrink></icon-shrink>`,
    });

    const svg = createElement(Shrink);

    expect(page.root).toEqualHtml(`
      <icon-shrink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shrink>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShrink],
      html: `<icon-shrink stroke="blue"></icon-shrink>`,
    });

    const svg = createElement(Shrink);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shrink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shrink>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShrink],
      html: `<icon-shrink stroke-width="2"></icon-shrink>`,
    });

    const svg = createElement(Shrink);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shrink class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shrink>
    `);
  });
});
