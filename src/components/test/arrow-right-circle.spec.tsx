import { newSpecPage } from '@stencil/core/testing';
import { IconArrowRightCircle } from '../arrow-right-circle';
import { createElement, ArrowRightCircle }  from 'lucide';

describe('icon-arrow-right-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowRightCircle],
      html: `<icon-arrow-right-circle></icon-arrow-right-circle>`,
    });

    const svg = createElement(ArrowRightCircle);

    expect(page.root).toEqualHtml(`
      <icon-arrow-right-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-right-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowRightCircle],
      html: `<icon-arrow-right-circle stroke="blue"></icon-arrow-right-circle>`,
    });

    const svg = createElement(ArrowRightCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-right-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-right-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowRightCircle],
      html: `<icon-arrow-right-circle stroke-width="2"></icon-arrow-right-circle>`,
    });

    const svg = createElement(ArrowRightCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-right-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-right-circle>
    `);
  });
});
