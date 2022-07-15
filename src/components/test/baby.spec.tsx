import { newSpecPage } from '@stencil/core/testing';
import { IconBaby } from '../baby';
import { createElement, Baby }  from 'lucide';

describe('icon-baby', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBaby],
      html: `<icon-baby></icon-baby>`,
    });

    const svg = createElement(Baby);

    expect(page.root).toEqualHtml(`
      <icon-baby class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-baby>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaby],
      html: `<icon-baby stroke="blue"></icon-baby>`,
    });

    const svg = createElement(Baby);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-baby class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-baby>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBaby],
      html: `<icon-baby stroke-width="2"></icon-baby>`,
    });

    const svg = createElement(Baby);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-baby class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-baby>
    `);
  });
});
