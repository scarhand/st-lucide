import { newSpecPage } from '@stencil/core/testing';
import { IconPauseOctagon } from '../pause-octagon';
import { createElement, PauseOctagon }  from 'lucide';

describe('icon-pause-octagon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPauseOctagon],
      html: `<icon-pause-octagon></icon-pause-octagon>`,
    });

    const svg = createElement(PauseOctagon);

    expect(page.root).toEqualHtml(`
      <icon-pause-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pause-octagon>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPauseOctagon],
      html: `<icon-pause-octagon stroke="blue"></icon-pause-octagon>`,
    });

    const svg = createElement(PauseOctagon);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pause-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pause-octagon>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPauseOctagon],
      html: `<icon-pause-octagon stroke-width="2"></icon-pause-octagon>`,
    });

    const svg = createElement(PauseOctagon);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pause-octagon class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pause-octagon>
    `);
  });
});
