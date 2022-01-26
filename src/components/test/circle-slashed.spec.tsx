import { newSpecPage } from '@stencil/core/testing';
import { IconCircleSlashed } from '../circle-slashed';
import { createElement, CircleSlashed }  from 'lucide';

describe('icon-circle-slashed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCircleSlashed],
      html: `<icon-circle-slashed></icon-circle-slashed>`,
    });

    const svg = createElement(CircleSlashed);

    expect(page.root).toEqualHtml(`
      <icon-circle-slashed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-circle-slashed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleSlashed],
      html: `<icon-circle-slashed stroke="blue"></icon-circle-slashed>`,
    });

    const svg = createElement(CircleSlashed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-circle-slashed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-circle-slashed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCircleSlashed],
      html: `<icon-circle-slashed stroke-width="2"></icon-circle-slashed>`,
    });

    const svg = createElement(CircleSlashed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-circle-slashed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-circle-slashed>
    `);
  });
});
