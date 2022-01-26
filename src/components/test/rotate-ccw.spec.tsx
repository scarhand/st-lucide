import { newSpecPage } from '@stencil/core/testing';
import { IconRotateCcw } from '../rotate-ccw';
import { createElement, RotateCcw }  from 'lucide';

describe('icon-rotate-ccw', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRotateCcw],
      html: `<icon-rotate-ccw></icon-rotate-ccw>`,
    });

    const svg = createElement(RotateCcw);

    expect(page.root).toEqualHtml(`
      <icon-rotate-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-rotate-ccw>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotateCcw],
      html: `<icon-rotate-ccw stroke="blue"></icon-rotate-ccw>`,
    });

    const svg = createElement(RotateCcw);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-rotate-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-rotate-ccw>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRotateCcw],
      html: `<icon-rotate-ccw stroke-width="2"></icon-rotate-ccw>`,
    });

    const svg = createElement(RotateCcw);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-rotate-ccw class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-rotate-ccw>
    `);
  });
});
