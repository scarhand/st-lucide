import { newSpecPage } from '@stencil/core/testing';
import { IconRegex } from '../regex';
import { createElement, Regex }  from 'lucide';

describe('icon-regex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRegex],
      html: `<icon-regex></icon-regex>`,
    });

    const svg = createElement(Regex);

    expect(page.root).toEqualHtml(`
      <icon-regex class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-regex>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRegex],
      html: `<icon-regex stroke="blue"></icon-regex>`,
    });

    const svg = createElement(Regex);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-regex class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-regex>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRegex],
      html: `<icon-regex stroke-width="2"></icon-regex>`,
    });

    const svg = createElement(Regex);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-regex class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-regex>
    `);
  });
});
