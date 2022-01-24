import { newSpecPage } from '@stencil/core/testing';
import { IconCross } from '../cross';
import { createElement, Cross }  from 'lucide';

describe('icon-cross', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCross],
      html: `<icon-cross></icon-cross>`,
    });

    const svg = createElement(Cross);

    expect(page.root).toEqualHtml(`
      <icon-cross class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cross>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCross],
      html: `<icon-cross stroke="blue"></icon-cross>`,
    });

    const svg = createElement(Cross);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cross class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cross>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCross],
      html: `<icon-cross stroke-width="2"></icon-cross>`,
    });

    const svg = createElement(Cross);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cross class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cross>
    `);
  });
});
