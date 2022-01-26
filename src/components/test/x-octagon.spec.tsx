import { newSpecPage } from '@stencil/core/testing';
import { IconXOctagon } from '../x-octagon';
import { createElement, XOctagon }  from 'lucide';

describe('icon-x-octagon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconXOctagon],
      html: `<icon-x-octagon></icon-x-octagon>`,
    });

    const svg = createElement(XOctagon);

    expect(page.root).toEqualHtml(`
      <icon-x-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-x-octagon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXOctagon],
      html: `<icon-x-octagon stroke="blue"></icon-x-octagon>`,
    });

    const svg = createElement(XOctagon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-x-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-x-octagon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconXOctagon],
      html: `<icon-x-octagon stroke-width="2"></icon-x-octagon>`,
    });

    const svg = createElement(XOctagon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-x-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-x-octagon>
    `);
  });
});
