import { newSpecPage } from '@stencil/core/testing';
import { IconDice4 } from '../dice-4';
import { createElement, Dice4 }  from 'lucide';

describe('icon-dice-4', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice4],
      html: `<icon-dice-4></icon-dice-4>`,
    });

    const svg = createElement(Dice4);

    expect(page.root).toEqualHtml(`
      <icon-dice-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-4>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice4],
      html: `<icon-dice-4 stroke="blue"></icon-dice-4>`,
    });

    const svg = createElement(Dice4);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-4>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice4],
      html: `<icon-dice-4 stroke-width="2"></icon-dice-4>`,
    });

    const svg = createElement(Dice4);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-4 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-4>
    `);
  });
});
