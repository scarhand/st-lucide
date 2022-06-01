import { newSpecPage } from '@stencil/core/testing';
import { IconSwords } from '../swords';
import { createElement, Swords }  from 'lucide';

describe('icon-swords', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSwords],
      html: `<icon-swords></icon-swords>`,
    });

    const svg = createElement(Swords);

    expect(page.root).toEqualHtml(`
      <icon-swords class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-swords>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwords],
      html: `<icon-swords stroke="blue"></icon-swords>`,
    });

    const svg = createElement(Swords);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-swords class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-swords>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSwords],
      html: `<icon-swords stroke-width="2"></icon-swords>`,
    });

    const svg = createElement(Swords);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-swords class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-swords>
    `);
  });
});
