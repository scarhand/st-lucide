import { newSpecPage } from '@stencil/core/testing';
import { IconCheck } from '../check';
import { createElement, Check }  from 'lucide';

describe('icon-check', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCheck],
      html: `<icon-check></icon-check>`,
    });

    const svg = createElement(Check);

    expect(page.root).toEqualHtml(`
      <icon-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-check>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheck],
      html: `<icon-check stroke="blue"></icon-check>`,
    });

    const svg = createElement(Check);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-check>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCheck],
      html: `<icon-check stroke-width="2"></icon-check>`,
    });

    const svg = createElement(Check);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-check class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-check>
    `);
  });
});
