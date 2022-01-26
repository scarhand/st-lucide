import { newSpecPage } from '@stencil/core/testing';
import { IconLaptop } from '../laptop';
import { createElement, Laptop }  from 'lucide';

describe('icon-laptop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLaptop],
      html: `<icon-laptop></icon-laptop>`,
    });

    const svg = createElement(Laptop);

    expect(page.root).toEqualHtml(`
      <icon-laptop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-laptop>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaptop],
      html: `<icon-laptop stroke="blue"></icon-laptop>`,
    });

    const svg = createElement(Laptop);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-laptop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-laptop>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLaptop],
      html: `<icon-laptop stroke-width="2"></icon-laptop>`,
    });

    const svg = createElement(Laptop);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-laptop class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-laptop>
    `);
  });
});
