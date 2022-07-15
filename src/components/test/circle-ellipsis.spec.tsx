import { newSpecPage } from '@stencil/core/testing';
import { IconCircleEllipsis } from '../circle-ellipsis';
import { createElement, CircleEllipsis }  from 'lucide';

describe('icon-circle-ellipsis', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCircleEllipsis],
      html: `<icon-circle-ellipsis></icon-circle-ellipsis>`,
    });

    const svg = createElement(CircleEllipsis);

    expect(page.root).toEqualHtml(`
      <icon-circle-ellipsis class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-circle-ellipsis>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleEllipsis],
      html: `<icon-circle-ellipsis stroke="blue"></icon-circle-ellipsis>`,
    });

    const svg = createElement(CircleEllipsis);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-circle-ellipsis class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-circle-ellipsis>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleEllipsis],
      html: `<icon-circle-ellipsis stroke-width="2"></icon-circle-ellipsis>`,
    });

    const svg = createElement(CircleEllipsis);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-circle-ellipsis class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-circle-ellipsis>
    `);
  });
});
