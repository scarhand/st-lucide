import { newSpecPage } from '@stencil/core/testing';
import { IconBanknote } from '../banknote';
import { createElement, Banknote }  from 'lucide';

describe('icon-banknote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBanknote],
      html: `<icon-banknote></icon-banknote>`,
    });

    const svg = createElement(Banknote);

    expect(page.root).toEqualHtml(`
      <icon-banknote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-banknote>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBanknote],
      html: `<icon-banknote stroke="blue"></icon-banknote>`,
    });

    const svg = createElement(Banknote);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-banknote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-banknote>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBanknote],
      html: `<icon-banknote stroke-width="2"></icon-banknote>`,
    });

    const svg = createElement(Banknote);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-banknote class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-banknote>
    `);
  });
});
