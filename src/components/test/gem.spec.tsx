import { newSpecPage } from '@stencil/core/testing';
import { IconGem } from '../gem';
import { createElement, Gem }  from 'lucide';

describe('icon-gem', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGem],
      html: `<icon-gem></icon-gem>`,
    });

    const svg = createElement(Gem);

    expect(page.root).toEqualHtml(`
      <icon-gem class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gem>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGem],
      html: `<icon-gem stroke="blue"></icon-gem>`,
    });

    const svg = createElement(Gem);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gem class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gem>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGem],
      html: `<icon-gem stroke-width="2"></icon-gem>`,
    });

    const svg = createElement(Gem);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gem class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gem>
    `);
  });
});
