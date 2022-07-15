import { newSpecPage } from '@stencil/core/testing';
import { IconShrub } from '../shrub';
import { createElement, Shrub }  from 'lucide';

describe('icon-shrub', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconShrub],
      html: `<icon-shrub></icon-shrub>`,
    });

    const svg = createElement(Shrub);

    expect(page.root).toEqualHtml(`
      <icon-shrub class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-shrub>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShrub],
      html: `<icon-shrub stroke="blue"></icon-shrub>`,
    });

    const svg = createElement(Shrub);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-shrub class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-shrub>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconShrub],
      html: `<icon-shrub stroke-width="2"></icon-shrub>`,
    });

    const svg = createElement(Shrub);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-shrub class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-shrub>
    `);
  });
});
