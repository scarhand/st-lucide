import { newSpecPage } from '@stencil/core/testing';
import { IconCog } from '../cog';
import { createElement, Cog }  from 'lucide';

describe('icon-cog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCog],
      html: `<icon-cog></icon-cog>`,
    });

    const svg = createElement(Cog);

    expect(page.root).toEqualHtml(`
      <icon-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cog>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCog],
      html: `<icon-cog stroke="blue"></icon-cog>`,
    });

    const svg = createElement(Cog);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cog>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCog],
      html: `<icon-cog stroke-width="2"></icon-cog>`,
    });

    const svg = createElement(Cog);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cog class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cog>
    `);
  });
});
