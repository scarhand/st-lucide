import { newSpecPage } from '@stencil/core/testing';
import { IconMaximize } from '../maximize';
import { createElement, Maximize }  from 'lucide';

describe('icon-maximize', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMaximize],
      html: `<icon-maximize></icon-maximize>`,
    });

    const svg = createElement(Maximize);

    expect(page.root).toEqualHtml(`
      <icon-maximize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-maximize>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMaximize],
      html: `<icon-maximize stroke="blue"></icon-maximize>`,
    });

    const svg = createElement(Maximize);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-maximize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-maximize>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMaximize],
      html: `<icon-maximize stroke-width="2"></icon-maximize>`,
    });

    const svg = createElement(Maximize);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-maximize class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-maximize>
    `);
  });
});
