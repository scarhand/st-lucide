import { newSpecPage } from '@stencil/core/testing';
import { IconFlame } from '../flame';
import { createElement, Flame }  from 'lucide';

describe('icon-flame', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlame],
      html: `<icon-flame></icon-flame>`,
    });

    const svg = createElement(Flame);

    expect(page.root).toEqualHtml(`
      <icon-flame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flame>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlame],
      html: `<icon-flame stroke="blue"></icon-flame>`,
    });

    const svg = createElement(Flame);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flame>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlame],
      html: `<icon-flame stroke-width="2"></icon-flame>`,
    });

    const svg = createElement(Flame);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flame class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flame>
    `);
  });
});
