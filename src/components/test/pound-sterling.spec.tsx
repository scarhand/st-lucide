import { newSpecPage } from '@stencil/core/testing';
import { IconPoundSterling } from '../pound-sterling';
import { createElement, PoundSterling }  from 'lucide';

describe('icon-pound-sterling', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPoundSterling],
      html: `<icon-pound-sterling></icon-pound-sterling>`,
    });

    const svg = createElement(PoundSterling);

    expect(page.root).toEqualHtml(`
      <icon-pound-sterling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pound-sterling>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPoundSterling],
      html: `<icon-pound-sterling stroke="blue"></icon-pound-sterling>`,
    });

    const svg = createElement(PoundSterling);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pound-sterling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pound-sterling>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPoundSterling],
      html: `<icon-pound-sterling stroke-width="2"></icon-pound-sterling>`,
    });

    const svg = createElement(PoundSterling);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pound-sterling class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pound-sterling>
    `);
  });
});
