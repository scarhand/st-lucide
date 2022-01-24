import { newSpecPage } from '@stencil/core/testing';
import { IconArrowBigRight } from '../arrow-big-right';
import { createElement, ArrowBigRight }  from 'lucide';

describe('icon-arrow-big-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigRight],
      html: `<icon-arrow-big-right></icon-arrow-big-right>`,
    });

    const svg = createElement(ArrowBigRight);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-big-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigRight],
      html: `<icon-arrow-big-right stroke="blue"></icon-arrow-big-right>`,
    });

    const svg = createElement(ArrowBigRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-big-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowBigRight],
      html: `<icon-arrow-big-right stroke-width="2"></icon-arrow-big-right>`,
    });

    const svg = createElement(ArrowBigRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-big-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-big-right>
    `);
  });
});
