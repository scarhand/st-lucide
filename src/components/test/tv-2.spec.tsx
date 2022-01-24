import { newSpecPage } from '@stencil/core/testing';
import { IconTv2 } from '../tv-2';
import { createElement, Tv2 }  from 'lucide';

describe('icon-tv-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTv2],
      html: `<icon-tv-2></icon-tv-2>`,
    });

    const svg = createElement(Tv2);

    expect(page.root).toEqualHtml(`
      <icon-tv-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tv-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTv2],
      html: `<icon-tv-2 stroke="blue"></icon-tv-2>`,
    });

    const svg = createElement(Tv2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tv-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tv-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTv2],
      html: `<icon-tv-2 stroke-width="2"></icon-tv-2>`,
    });

    const svg = createElement(Tv2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tv-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tv-2>
    `);
  });
});
