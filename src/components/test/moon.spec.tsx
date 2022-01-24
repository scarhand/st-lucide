import { newSpecPage } from '@stencil/core/testing';
import { IconMoon } from '../moon';
import { createElement, Moon }  from 'lucide';

describe('icon-moon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMoon],
      html: `<icon-moon></icon-moon>`,
    });

    const svg = createElement(Moon);

    expect(page.root).toEqualHtml(`
      <icon-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-moon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoon],
      html: `<icon-moon stroke="blue"></icon-moon>`,
    });

    const svg = createElement(Moon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-moon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMoon],
      html: `<icon-moon stroke-width="2"></icon-moon>`,
    });

    const svg = createElement(Moon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-moon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-moon>
    `);
  });
});
