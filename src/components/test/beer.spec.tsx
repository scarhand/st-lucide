import { newSpecPage } from '@stencil/core/testing';
import { IconBeer } from '../beer';
import { createElement, Beer }  from 'lucide';

describe('icon-beer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBeer],
      html: `<icon-beer></icon-beer>`,
    });

    const svg = createElement(Beer);

    expect(page.root).toEqualHtml(`
      <icon-beer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-beer>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBeer],
      html: `<icon-beer stroke="blue"></icon-beer>`,
    });

    const svg = createElement(Beer);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-beer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-beer>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBeer],
      html: `<icon-beer stroke-width="2"></icon-beer>`,
    });

    const svg = createElement(Beer);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-beer class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-beer>
    `);
  });
});
