import { newSpecPage } from '@stencil/core/testing';
import { IconLandmark } from '../landmark';
import { createElement, Landmark }  from 'lucide';

describe('icon-landmark', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLandmark],
      html: `<icon-landmark></icon-landmark>`,
    });

    const svg = createElement(Landmark);

    expect(page.root).toEqualHtml(`
      <icon-landmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-landmark>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLandmark],
      html: `<icon-landmark stroke="blue"></icon-landmark>`,
    });

    const svg = createElement(Landmark);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-landmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-landmark>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLandmark],
      html: `<icon-landmark stroke-width="2"></icon-landmark>`,
    });

    const svg = createElement(Landmark);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-landmark class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-landmark>
    `);
  });
});
