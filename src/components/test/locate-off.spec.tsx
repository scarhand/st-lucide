import { newSpecPage } from '@stencil/core/testing';
import { IconLocateOff } from '../locate-off';
import { createElement, LocateOff }  from 'lucide';

describe('icon-locate-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLocateOff],
      html: `<icon-locate-off></icon-locate-off>`,
    });

    const svg = createElement(LocateOff);

    expect(page.root).toEqualHtml(`
      <icon-locate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-locate-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocateOff],
      html: `<icon-locate-off stroke="blue"></icon-locate-off>`,
    });

    const svg = createElement(LocateOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-locate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-locate-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocateOff],
      html: `<icon-locate-off stroke-width="2"></icon-locate-off>`,
    });

    const svg = createElement(LocateOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-locate-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-locate-off>
    `);
  });
});
