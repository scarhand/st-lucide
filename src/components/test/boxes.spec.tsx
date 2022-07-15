import { newSpecPage } from '@stencil/core/testing';
import { IconBoxes } from '../boxes';
import { createElement, Boxes }  from 'lucide';

describe('icon-boxes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBoxes],
      html: `<icon-boxes></icon-boxes>`,
    });

    const svg = createElement(Boxes);

    expect(page.root).toEqualHtml(`
      <icon-boxes class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-boxes>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBoxes],
      html: `<icon-boxes stroke="blue"></icon-boxes>`,
    });

    const svg = createElement(Boxes);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-boxes class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-boxes>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBoxes],
      html: `<icon-boxes stroke-width="2"></icon-boxes>`,
    });

    const svg = createElement(Boxes);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-boxes class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-boxes>
    `);
  });
});
