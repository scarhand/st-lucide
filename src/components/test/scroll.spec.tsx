import { newSpecPage } from '@stencil/core/testing';
import { IconScroll } from '../scroll';
import { createElement, Scroll }  from 'lucide';

describe('icon-scroll', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScroll],
      html: `<icon-scroll></icon-scroll>`,
    });

    const svg = createElement(Scroll);

    expect(page.root).toEqualHtml(`
      <icon-scroll class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scroll>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScroll],
      html: `<icon-scroll stroke="blue"></icon-scroll>`,
    });

    const svg = createElement(Scroll);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scroll class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scroll>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScroll],
      html: `<icon-scroll stroke-width="2"></icon-scroll>`,
    });

    const svg = createElement(Scroll);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scroll class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scroll>
    `);
  });
});
