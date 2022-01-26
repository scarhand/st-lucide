import { newSpecPage } from '@stencil/core/testing';
import { IconDollarSign } from '../dollar-sign';
import { createElement, DollarSign }  from 'lucide';

describe('icon-dollar-sign', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDollarSign],
      html: `<icon-dollar-sign></icon-dollar-sign>`,
    });

    const svg = createElement(DollarSign);

    expect(page.root).toEqualHtml(`
      <icon-dollar-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-dollar-sign>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDollarSign],
      html: `<icon-dollar-sign stroke="blue"></icon-dollar-sign>`,
    });

    const svg = createElement(DollarSign);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-dollar-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-dollar-sign>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDollarSign],
      html: `<icon-dollar-sign stroke-width="2"></icon-dollar-sign>`,
    });

    const svg = createElement(DollarSign);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-dollar-sign class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-dollar-sign>
    `);
  });
});
