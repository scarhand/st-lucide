import { newSpecPage } from '@stencil/core/testing';
import { IconDivideCircle } from '../divide-circle';
import { createElement, DivideCircle }  from 'lucide';

describe('icon-divide-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDivideCircle],
      html: `<icon-divide-circle></icon-divide-circle>`,
    });

    const svg = createElement(DivideCircle);

    expect(page.root).toEqualHtml(`
      <icon-divide-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-divide-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivideCircle],
      html: `<icon-divide-circle stroke="blue"></icon-divide-circle>`,
    });

    const svg = createElement(DivideCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-divide-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-divide-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDivideCircle],
      html: `<icon-divide-circle stroke-width="2"></icon-divide-circle>`,
    });

    const svg = createElement(DivideCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-divide-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-divide-circle>
    `);
  });
});
