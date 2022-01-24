import { newSpecPage } from '@stencil/core/testing';
import { IconGlobe2 } from '../globe-2';
import { createElement, Globe2 }  from 'lucide';

describe('icon-globe-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGlobe2],
      html: `<icon-globe-2></icon-globe-2>`,
    });

    const svg = createElement(Globe2);

    expect(page.root).toEqualHtml(`
      <icon-globe-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-globe-2>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlobe2],
      html: `<icon-globe-2 stroke="blue"></icon-globe-2>`,
    });

    const svg = createElement(Globe2);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-globe-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-globe-2>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlobe2],
      html: `<icon-globe-2 stroke-width="2"></icon-globe-2>`,
    });

    const svg = createElement(Globe2);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-globe-2 class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-globe-2>
    `);
  });
});
