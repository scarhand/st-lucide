import { newSpecPage } from '@stencil/core/testing';
import { IconDice2 } from '../dice-2';
import { createElement, Dice2 }  from 'lucide';

describe('icon-dice-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice2],
      html: `<icon-dice-2></icon-dice-2>`,
    });

    const svg = createElement(Dice2);

    expect(page.root).toEqualHtml(`
      <icon-dice-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice2],
      html: `<icon-dice-2 stroke="blue"></icon-dice-2>`,
    });

    const svg = createElement(Dice2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice2],
      html: `<icon-dice-2 stroke-width="2"></icon-dice-2>`,
    });

    const svg = createElement(Dice2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-2>
    `);
  });
});
