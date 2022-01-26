import { newSpecPage } from '@stencil/core/testing';
import { IconHand } from '../hand';
import { createElement, Hand }  from 'lucide';

describe('icon-hand', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHand],
      html: `<icon-hand></icon-hand>`,
    });

    const svg = createElement(Hand);

    expect(page.root).toEqualHtml(`
      <icon-hand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-hand>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHand],
      html: `<icon-hand stroke="blue"></icon-hand>`,
    });

    const svg = createElement(Hand);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-hand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-hand>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHand],
      html: `<icon-hand stroke-width="2"></icon-hand>`,
    });

    const svg = createElement(Hand);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-hand class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-hand>
    `);
  });
});
