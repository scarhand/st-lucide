import { newSpecPage } from '@stencil/core/testing';
import { IconDice3 } from '../dice-3';
import { createElement, Dice3 }  from 'lucide';

describe('icon-dice-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice3],
      html: `<icon-dice-3></icon-dice-3>`,
    });

    const svg = createElement(Dice3);

    expect(page.root).toEqualHtml(`
      <icon-dice-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-3>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice3],
      html: `<icon-dice-3 stroke="blue"></icon-dice-3>`,
    });

    const svg = createElement(Dice3);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-3>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice3],
      html: `<icon-dice-3 stroke-width="2"></icon-dice-3>`,
    });

    const svg = createElement(Dice3);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-3 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-3>
    `);
  });
});
