import { newSpecPage } from '@stencil/core/testing';
import { IconMeh } from '../meh';
import { createElement, Meh }  from 'lucide';

describe('icon-meh', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMeh],
      html: `<icon-meh></icon-meh>`,
    });

    const svg = createElement(Meh);

    expect(page.root).toEqualHtml(`
      <icon-meh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-meh>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMeh],
      html: `<icon-meh stroke="blue"></icon-meh>`,
    });

    const svg = createElement(Meh);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-meh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-meh>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMeh],
      html: `<icon-meh stroke-width="2"></icon-meh>`,
    });

    const svg = createElement(Meh);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-meh class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-meh>
    `);
  });
});
