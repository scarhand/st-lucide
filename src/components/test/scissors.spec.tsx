import { newSpecPage } from '@stencil/core/testing';
import { IconScissors } from '../scissors';
import { createElement, Scissors }  from 'lucide';

describe('icon-scissors', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScissors],
      html: `<icon-scissors></icon-scissors>`,
    });

    const svg = createElement(Scissors);

    expect(page.root).toEqualHtml(`
      <icon-scissors class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-scissors>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScissors],
      html: `<icon-scissors stroke="blue"></icon-scissors>`,
    });

    const svg = createElement(Scissors);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-scissors class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-scissors>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScissors],
      html: `<icon-scissors stroke-width="2"></icon-scissors>`,
    });

    const svg = createElement(Scissors);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-scissors class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-scissors>
    `);
  });
});
