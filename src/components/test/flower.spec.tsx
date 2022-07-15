import { newSpecPage } from '@stencil/core/testing';
import { IconFlower } from '../flower';
import { createElement, Flower }  from 'lucide';

describe('icon-flower', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFlower],
      html: `<icon-flower></icon-flower>`,
    });

    const svg = createElement(Flower);

    expect(page.root).toEqualHtml(`
      <icon-flower class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-flower>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlower],
      html: `<icon-flower stroke="blue"></icon-flower>`,
    });

    const svg = createElement(Flower);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-flower class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-flower>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFlower],
      html: `<icon-flower stroke-width="2"></icon-flower>`,
    });

    const svg = createElement(Flower);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-flower class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-flower>
    `);
  });
});
