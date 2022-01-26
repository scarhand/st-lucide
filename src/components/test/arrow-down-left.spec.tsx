import { newSpecPage } from '@stencil/core/testing';
import { IconArrowDownLeft } from '../arrow-down-left';
import { createElement, ArrowDownLeft }  from 'lucide';

describe('icon-arrow-down-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownLeft],
      html: `<icon-arrow-down-left></icon-arrow-down-left>`,
    });

    const svg = createElement(ArrowDownLeft);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-down-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownLeft],
      html: `<icon-arrow-down-left stroke="blue"></icon-arrow-down-left>`,
    });

    const svg = createElement(ArrowDownLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-down-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownLeft],
      html: `<icon-arrow-down-left stroke-width="2"></icon-arrow-down-left>`,
    });

    const svg = createElement(ArrowDownLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-down-left>
    `);
  });
});
