import { newSpecPage } from '@stencil/core/testing';
import { IconSword } from '../sword';
import { createElement, Sword }  from 'lucide';

describe('icon-sword', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSword],
      html: `<icon-sword></icon-sword>`,
    });

    const svg = createElement(Sword);

    expect(page.root).toEqualHtml(`
      <icon-sword class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sword>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSword],
      html: `<icon-sword stroke="blue"></icon-sword>`,
    });

    const svg = createElement(Sword);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sword class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sword>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSword],
      html: `<icon-sword stroke-width="2"></icon-sword>`,
    });

    const svg = createElement(Sword);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sword class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sword>
    `);
  });
});
