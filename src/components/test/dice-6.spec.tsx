import { newSpecPage } from '@stencil/core/testing';
import { IconDice6 } from '../dice-6';
import { createElement, Dice6 }  from 'lucide';

describe('icon-dice-6', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDice6],
      html: `<icon-dice-6></icon-dice-6>`,
    });

    const svg = createElement(Dice6);

    expect(page.root).toEqualHtml(`
      <icon-dice-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dice-6>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice6],
      html: `<icon-dice-6 stroke="blue"></icon-dice-6>`,
    });

    const svg = createElement(Dice6);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dice-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dice-6>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDice6],
      html: `<icon-dice-6 stroke-width="2"></icon-dice-6>`,
    });

    const svg = createElement(Dice6);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dice-6 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dice-6>
    `);
  });
});
