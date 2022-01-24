import { newSpecPage } from '@stencil/core/testing';
import { IconArrowLeft } from '../arrow-left';
import { createElement, ArrowLeft }  from 'lucide';

describe('icon-arrow-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeft],
      html: `<icon-arrow-left></icon-arrow-left>`,
    });

    const svg = createElement(ArrowLeft);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-left>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeft],
      html: `<icon-arrow-left stroke="blue"></icon-arrow-left>`,
    });

    const svg = createElement(ArrowLeft);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-left>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeft],
      html: `<icon-arrow-left stroke-width="2"></icon-arrow-left>`,
    });

    const svg = createElement(ArrowLeft);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-left>
    `);
  });
});
