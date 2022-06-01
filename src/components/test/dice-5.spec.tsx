import { newSpecPage } from '@stencil/core/testing';
import { IconDice5 } from '../dice-5';
import { createElement, Dice5 }  from 'lucide';

describe('icon-dice-5', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice5],
      html: `<icon-dice-5></icon-dice-5>`,
    });

    const svg = createElement(Dice5);

    expect(page.root).toEqualHtml(`
      <icon-dice-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-5>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice5],
      html: `<icon-dice-5 stroke="blue"></icon-dice-5>`,
    });

    const svg = createElement(Dice5);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-5>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice5],
      html: `<icon-dice-5 stroke-width="2"></icon-dice-5>`,
    });

    const svg = createElement(Dice5);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-5 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-5>
    `);
  });
});
