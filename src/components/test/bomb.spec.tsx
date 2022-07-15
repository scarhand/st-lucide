import { newSpecPage } from '@stencil/core/testing';
import { IconBomb } from '../bomb';
import { createElement, Bomb }  from 'lucide';

describe('icon-bomb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBomb],
      html: `<icon-bomb></icon-bomb>`,
    });

    const svg = createElement(Bomb);

    expect(page.root).toEqualHtml(`
      <icon-bomb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bomb>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBomb],
      html: `<icon-bomb stroke="blue"></icon-bomb>`,
    });

    const svg = createElement(Bomb);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bomb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bomb>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBomb],
      html: `<icon-bomb stroke-width="2"></icon-bomb>`,
    });

    const svg = createElement(Bomb);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bomb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bomb>
    `);
  });
});
