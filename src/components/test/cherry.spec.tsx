import { newSpecPage } from '@stencil/core/testing';
import { IconCherry } from '../cherry';
import { createElement, Cherry }  from 'lucide';

describe('icon-cherry', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCherry],
      html: `<icon-cherry></icon-cherry>`,
    });

    const svg = createElement(Cherry);

    expect(page.root).toEqualHtml(`
      <icon-cherry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cherry>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCherry],
      html: `<icon-cherry stroke="blue"></icon-cherry>`,
    });

    const svg = createElement(Cherry);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cherry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cherry>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCherry],
      html: `<icon-cherry stroke-width="2"></icon-cherry>`,
    });

    const svg = createElement(Cherry);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cherry class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cherry>
    `);
  });
});
