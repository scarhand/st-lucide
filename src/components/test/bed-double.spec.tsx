import { newSpecPage } from '@stencil/core/testing';
import { IconBedDouble } from '../bed-double';
import { createElement, BedDouble }  from 'lucide';

describe('icon-bed-double', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBedDouble],
      html: `<icon-bed-double></icon-bed-double>`,
    });

    const svg = createElement(BedDouble);

    expect(page.root).toEqualHtml(`
      <icon-bed-double class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bed-double>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBedDouble],
      html: `<icon-bed-double stroke="blue"></icon-bed-double>`,
    });

    const svg = createElement(BedDouble);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bed-double class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bed-double>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBedDouble],
      html: `<icon-bed-double stroke-width="2"></icon-bed-double>`,
    });

    const svg = createElement(BedDouble);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bed-double class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bed-double>
    `);
  });
});
