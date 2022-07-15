import { newSpecPage } from '@stencil/core/testing';
import { IconBackpack } from '../backpack';
import { createElement, Backpack }  from 'lucide';

describe('icon-backpack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBackpack],
      html: `<icon-backpack></icon-backpack>`,
    });

    const svg = createElement(Backpack);

    expect(page.root).toEqualHtml(`
      <icon-backpack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-backpack>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBackpack],
      html: `<icon-backpack stroke="blue"></icon-backpack>`,
    });

    const svg = createElement(Backpack);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-backpack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-backpack>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBackpack],
      html: `<icon-backpack stroke-width="2"></icon-backpack>`,
    });

    const svg = createElement(Backpack);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-backpack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-backpack>
    `);
  });
});
