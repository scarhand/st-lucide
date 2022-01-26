import { newSpecPage } from '@stencil/core/testing';
import { IconGlasses } from '../glasses';
import { createElement, Glasses }  from 'lucide';

describe('icon-glasses', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGlasses],
      html: `<icon-glasses></icon-glasses>`,
    });

    const svg = createElement(Glasses);

    expect(page.root).toEqualHtml(`
      <icon-glasses class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-glasses>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlasses],
      html: `<icon-glasses stroke="blue"></icon-glasses>`,
    });

    const svg = createElement(Glasses);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-glasses class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-glasses>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlasses],
      html: `<icon-glasses stroke-width="2"></icon-glasses>`,
    });

    const svg = createElement(Glasses);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-glasses class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-glasses>
    `);
  });
});
