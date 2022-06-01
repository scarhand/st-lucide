import { newSpecPage } from '@stencil/core/testing';
import { IconDice1 } from '../dice-1';
import { createElement, Dice1 }  from 'lucide';

describe('icon-dice-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice1],
      html: `<icon-dice-1></icon-dice-1>`,
    });

    const svg = createElement(Dice1);

    expect(page.root).toEqualHtml(`
      <icon-dice-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-1>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice1],
      html: `<icon-dice-1 stroke="blue"></icon-dice-1>`,
    });

    const svg = createElement(Dice1);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-1>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice1],
      html: `<icon-dice-1 stroke-width="2"></icon-dice-1>`,
    });

    const svg = createElement(Dice1);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-1 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-1>
    `);
  });
});
