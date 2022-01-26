import { newSpecPage } from '@stencil/core/testing';
import { IconCast } from '../cast';
import { createElement, Cast }  from 'lucide';

describe('icon-cast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCast],
      html: `<icon-cast></icon-cast>`,
    });

    const svg = createElement(Cast);

    expect(page.root).toEqualHtml(`
      <icon-cast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cast>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCast],
      html: `<icon-cast stroke="blue"></icon-cast>`,
    });

    const svg = createElement(Cast);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cast>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCast],
      html: `<icon-cast stroke-width="2"></icon-cast>`,
    });

    const svg = createElement(Cast);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cast>
    `);
  });
});
