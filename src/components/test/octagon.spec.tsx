import { newSpecPage } from '@stencil/core/testing';
import { IconOctagon } from '../octagon';
import { createElement, Octagon }  from 'lucide';

describe('icon-octagon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconOctagon],
      html: `<icon-octagon></icon-octagon>`,
    });

    const svg = createElement(Octagon);

    expect(page.root).toEqualHtml(`
      <icon-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-octagon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOctagon],
      html: `<icon-octagon stroke="blue"></icon-octagon>`,
    });

    const svg = createElement(Octagon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-octagon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconOctagon],
      html: `<icon-octagon stroke-width="2"></icon-octagon>`,
    });

    const svg = createElement(Octagon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-octagon>
    `);
  });
});
