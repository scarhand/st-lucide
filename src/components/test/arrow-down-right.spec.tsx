import { newSpecPage } from '@stencil/core/testing';
import { IconArrowDownRight } from '../arrow-down-right';
import { createElement, ArrowDownRight }  from 'lucide';

describe('icon-arrow-down-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownRight],
      html: `<icon-arrow-down-right></icon-arrow-down-right>`,
    });

    const svg = createElement(ArrowDownRight);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-down-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownRight],
      html: `<icon-arrow-down-right stroke="blue"></icon-arrow-down-right>`,
    });

    const svg = createElement(ArrowDownRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-down-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownRight],
      html: `<icon-arrow-down-right stroke-width="2"></icon-arrow-down-right>`,
    });

    const svg = createElement(ArrowDownRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-down-right>
    `);
  });
});
