import { newSpecPage } from '@stencil/core/testing';
import { IconCoffee } from '../coffee';
import { createElement, Coffee }  from 'lucide';

describe('icon-coffee', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCoffee],
      html: `<icon-coffee></icon-coffee>`,
    });

    const svg = createElement(Coffee);

    expect(page.root).toEqualHtml(`
      <icon-coffee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-coffee>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCoffee],
      html: `<icon-coffee stroke="blue"></icon-coffee>`,
    });

    const svg = createElement(Coffee);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-coffee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-coffee>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCoffee],
      html: `<icon-coffee stroke-width="2"></icon-coffee>`,
    });

    const svg = createElement(Coffee);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-coffee class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-coffee>
    `);
  });
});
