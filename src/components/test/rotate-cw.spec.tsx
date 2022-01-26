import { newSpecPage } from '@stencil/core/testing';
import { IconRotateCw } from '../rotate-cw';
import { createElement, RotateCw }  from 'lucide';

describe('icon-rotate-cw', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRotateCw],
      html: `<icon-rotate-cw></icon-rotate-cw>`,
    });

    const svg = createElement(RotateCw);

    expect(page.root).toEqualHtml(`
      <icon-rotate-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rotate-cw>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotateCw],
      html: `<icon-rotate-cw stroke="blue"></icon-rotate-cw>`,
    });

    const svg = createElement(RotateCw);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rotate-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rotate-cw>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotateCw],
      html: `<icon-rotate-cw stroke-width="2"></icon-rotate-cw>`,
    });

    const svg = createElement(RotateCw);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rotate-cw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rotate-cw>
    `);
  });
});
