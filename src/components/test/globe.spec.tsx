import { newSpecPage } from '@stencil/core/testing';
import { IconGlobe } from '../globe';
import { createElement, Globe }  from 'lucide';

describe('icon-globe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGlobe],
      html: `<icon-globe></icon-globe>`,
    });

    const svg = createElement(Globe);

    expect(page.root).toEqualHtml(`
      <icon-globe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-globe>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlobe],
      html: `<icon-globe stroke="blue"></icon-globe>`,
    });

    const svg = createElement(Globe);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-globe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-globe>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGlobe],
      html: `<icon-globe stroke-width="2"></icon-globe>`,
    });

    const svg = createElement(Globe);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-globe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-globe>
    `);
  });
});
