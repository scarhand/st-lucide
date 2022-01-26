import { newSpecPage } from '@stencil/core/testing';
import { IconArrowLeftRight } from '../arrow-left-right';
import { createElement, ArrowLeftRight }  from 'lucide';

describe('icon-arrow-left-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftRight],
      html: `<icon-arrow-left-right></icon-arrow-left-right>`,
    });

    const svg = createElement(ArrowLeftRight);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-left-right>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftRight],
      html: `<icon-arrow-left-right stroke="blue"></icon-arrow-left-right>`,
    });

    const svg = createElement(ArrowLeftRight);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-left-right>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftRight],
      html: `<icon-arrow-left-right stroke-width="2"></icon-arrow-left-right>`,
    });

    const svg = createElement(ArrowLeftRight);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-right class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-left-right>
    `);
  });
});
