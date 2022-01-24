import { newSpecPage } from '@stencil/core/testing';
import { IconLaptop2 } from '../laptop-2';
import { createElement, Laptop2 }  from 'lucide';

describe('icon-laptop-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLaptop2],
      html: `<icon-laptop-2></icon-laptop-2>`,
    });

    const svg = createElement(Laptop2);

    expect(page.root).toEqualHtml(`
      <icon-laptop-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-laptop-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaptop2],
      html: `<icon-laptop-2 stroke="blue"></icon-laptop-2>`,
    });

    const svg = createElement(Laptop2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-laptop-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-laptop-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaptop2],
      html: `<icon-laptop-2 stroke-width="2"></icon-laptop-2>`,
    });

    const svg = createElement(Laptop2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-laptop-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-laptop-2>
    `);
  });
});
