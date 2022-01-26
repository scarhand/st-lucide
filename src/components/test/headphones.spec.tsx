import { newSpecPage } from '@stencil/core/testing';
import { IconHeadphones } from '../headphones';
import { createElement, Headphones }  from 'lucide';

describe('icon-headphones', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeadphones],
      html: `<icon-headphones></icon-headphones>`,
    });

    const svg = createElement(Headphones);

    expect(page.root).toEqualHtml(`
      <icon-headphones class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-headphones>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeadphones],
      html: `<icon-headphones stroke="blue"></icon-headphones>`,
    });

    const svg = createElement(Headphones);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-headphones class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-headphones>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeadphones],
      html: `<icon-headphones stroke-width="2"></icon-headphones>`,
    });

    const svg = createElement(Headphones);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-headphones class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-headphones>
    `);
  });
});
