import { newSpecPage } from '@stencil/core/testing';
import { IconArrowDownCircle } from '../arrow-down-circle';
import { createElement, ArrowDownCircle }  from 'lucide';

describe('icon-arrow-down-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownCircle],
      html: `<icon-arrow-down-circle></icon-arrow-down-circle>`,
    });

    const svg = createElement(ArrowDownCircle);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-down-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownCircle],
      html: `<icon-arrow-down-circle stroke="blue"></icon-arrow-down-circle>`,
    });

    const svg = createElement(ArrowDownCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-down-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowDownCircle],
      html: `<icon-arrow-down-circle stroke-width="2"></icon-arrow-down-circle>`,
    });

    const svg = createElement(ArrowDownCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-down-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-down-circle>
    `);
  });
});
