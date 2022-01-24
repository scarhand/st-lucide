import { newSpecPage } from '@stencil/core/testing';
import { IconTent } from '../tent';
import { createElement, Tent }  from 'lucide';

describe('icon-tent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTent],
      html: `<icon-tent></icon-tent>`,
    });

    const svg = createElement(Tent);

    expect(page.root).toEqualHtml(`
      <icon-tent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tent>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTent],
      html: `<icon-tent stroke="blue"></icon-tent>`,
    });

    const svg = createElement(Tent);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tent>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTent],
      html: `<icon-tent stroke-width="2"></icon-tent>`,
    });

    const svg = createElement(Tent);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tent class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tent>
    `);
  });
});
