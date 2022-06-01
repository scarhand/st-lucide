import { newSpecPage } from '@stencil/core/testing';
import { IconEraser } from '../eraser';
import { createElement, Eraser }  from 'lucide';

describe('icon-eraser', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconEraser],
      html: `<icon-eraser></icon-eraser>`,
    });

    const svg = createElement(Eraser);

    expect(page.root).toEqualHtml(`
      <icon-eraser class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-eraser>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEraser],
      html: `<icon-eraser stroke="blue"></icon-eraser>`,
    });

    const svg = createElement(Eraser);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-eraser class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-eraser>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconEraser],
      html: `<icon-eraser stroke-width="2"></icon-eraser>`,
    });

    const svg = createElement(Eraser);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-eraser class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-eraser>
    `);
  });
});
