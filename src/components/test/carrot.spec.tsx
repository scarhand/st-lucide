import { newSpecPage } from '@stencil/core/testing';
import { IconCarrot } from '../carrot';
import { createElement, Carrot }  from 'lucide';

describe('icon-carrot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCarrot],
      html: `<icon-carrot></icon-carrot>`,
    });

    const svg = createElement(Carrot);

    expect(page.root).toEqualHtml(`
      <icon-carrot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-carrot>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCarrot],
      html: `<icon-carrot stroke="blue"></icon-carrot>`,
    });

    const svg = createElement(Carrot);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-carrot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-carrot>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCarrot],
      html: `<icon-carrot stroke-width="2"></icon-carrot>`,
    });

    const svg = createElement(Carrot);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-carrot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-carrot>
    `);
  });
});
