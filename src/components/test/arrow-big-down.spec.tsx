import { newSpecPage } from '@stencil/core/testing';
import { IconArrowBigDown } from '../arrow-big-down';
import { createElement, ArrowBigDown }  from 'lucide';

describe('icon-arrow-big-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigDown],
      html: `<icon-arrow-big-down></icon-arrow-big-down>`,
    });

    const svg = createElement(ArrowBigDown);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-big-down>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigDown],
      html: `<icon-arrow-big-down stroke="blue"></icon-arrow-big-down>`,
    });

    const svg = createElement(ArrowBigDown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-big-down>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigDown],
      html: `<icon-arrow-big-down stroke-width="2"></icon-arrow-big-down>`,
    });

    const svg = createElement(ArrowBigDown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-down class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-big-down>
    `);
  });
});
