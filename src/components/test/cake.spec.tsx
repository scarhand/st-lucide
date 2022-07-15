import { newSpecPage } from '@stencil/core/testing';
import { IconCake } from '../cake';
import { createElement, Cake }  from 'lucide';

describe('icon-cake', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCake],
      html: `<icon-cake></icon-cake>`,
    });

    const svg = createElement(Cake);

    expect(page.root).toEqualHtml(`
      <icon-cake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cake>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCake],
      html: `<icon-cake stroke="blue"></icon-cake>`,
    });

    const svg = createElement(Cake);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cake>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCake],
      html: `<icon-cake stroke-width="2"></icon-cake>`,
    });

    const svg = createElement(Cake);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cake>
    `);
  });
});
