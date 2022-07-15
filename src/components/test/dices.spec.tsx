import { newSpecPage } from '@stencil/core/testing';
import { IconDices } from '../dices';
import { createElement, Dices }  from 'lucide';

describe('icon-dices', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDices],
      html: `<icon-dices></icon-dices>`,
    });

    const svg = createElement(Dices);

    expect(page.root).toEqualHtml(`
      <icon-dices class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dices>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDices],
      html: `<icon-dices stroke="blue"></icon-dices>`,
    });

    const svg = createElement(Dices);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dices class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dices>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDices],
      html: `<icon-dices stroke-width="2"></icon-dices>`,
    });

    const svg = createElement(Dices);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dices class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dices>
    `);
  });
});
