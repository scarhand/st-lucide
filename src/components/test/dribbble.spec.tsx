import { newSpecPage } from '@stencil/core/testing';
import { IconDribbble } from '../dribbble';
import { createElement, Dribbble }  from 'lucide';

describe('icon-dribbble', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDribbble],
      html: `<icon-dribbble></icon-dribbble>`,
    });

    const svg = createElement(Dribbble);

    expect(page.root).toEqualHtml(`
      <icon-dribbble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dribbble>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDribbble],
      html: `<icon-dribbble stroke="blue"></icon-dribbble>`,
    });

    const svg = createElement(Dribbble);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dribbble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dribbble>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDribbble],
      html: `<icon-dribbble stroke-width="2"></icon-dribbble>`,
    });

    const svg = createElement(Dribbble);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dribbble class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dribbble>
    `);
  });
});
