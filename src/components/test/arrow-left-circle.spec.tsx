import { newSpecPage } from '@stencil/core/testing';
import { IconArrowLeftCircle } from '../arrow-left-circle';
import { createElement, ArrowLeftCircle }  from 'lucide';

describe('icon-arrow-left-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftCircle],
      html: `<icon-arrow-left-circle></icon-arrow-left-circle>`,
    });

    const svg = createElement(ArrowLeftCircle);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-arrow-left-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftCircle],
      html: `<icon-arrow-left-circle stroke="blue"></icon-arrow-left-circle>`,
    });

    const svg = createElement(ArrowLeftCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-arrow-left-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconArrowLeftCircle],
      html: `<icon-arrow-left-circle stroke-width="2"></icon-arrow-left-circle>`,
    });

    const svg = createElement(ArrowLeftCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-arrow-left-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-arrow-left-circle>
    `);
  });
});
