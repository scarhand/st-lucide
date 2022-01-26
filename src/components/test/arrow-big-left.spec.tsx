import { newSpecPage } from '@stencil/core/testing';
import { IconArrowBigLeft } from '../arrow-big-left';
import { createElement, ArrowBigLeft }  from 'lucide';

describe('icon-arrow-big-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigLeft],
      html: `<icon-arrow-big-left></icon-arrow-big-left>`,
    });

    const svg = createElement(ArrowBigLeft);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-big-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigLeft],
      html: `<icon-arrow-big-left stroke="blue"></icon-arrow-big-left>`,
    });

    const svg = createElement(ArrowBigLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-big-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigLeft],
      html: `<icon-arrow-big-left stroke-width="2"></icon-arrow-big-left>`,
    });

    const svg = createElement(ArrowBigLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-big-left>
    `);
  });
});
