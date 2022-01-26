import { newSpecPage } from '@stencil/core/testing';
import { IconOption } from '../option';
import { createElement, Option }  from 'lucide';

describe('icon-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconOption],
      html: `<icon-option></icon-option>`,
    });

    const svg = createElement(Option);

    expect(page.root).toEqualHtml(`
      <icon-option class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-option>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOption],
      html: `<icon-option stroke="blue"></icon-option>`,
    });

    const svg = createElement(Option);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-option class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-option>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOption],
      html: `<icon-option stroke-width="2"></icon-option>`,
    });

    const svg = createElement(Option);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-option class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-option>
    `);
  });
});
