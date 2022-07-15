import { newSpecPage } from '@stencil/core/testing';
import { IconBedSingle } from '../bed-single';
import { createElement, BedSingle }  from 'lucide';

describe('icon-bed-single', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBedSingle],
      html: `<icon-bed-single></icon-bed-single>`,
    });

    const svg = createElement(BedSingle);

    expect(page.root).toEqualHtml(`
      <icon-bed-single class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bed-single>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBedSingle],
      html: `<icon-bed-single stroke="blue"></icon-bed-single>`,
    });

    const svg = createElement(BedSingle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bed-single class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bed-single>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBedSingle],
      html: `<icon-bed-single stroke-width="2"></icon-bed-single>`,
    });

    const svg = createElement(BedSingle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bed-single class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bed-single>
    `);
  });
});
