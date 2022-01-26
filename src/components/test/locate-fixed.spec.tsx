import { newSpecPage } from '@stencil/core/testing';
import { IconLocateFixed } from '../locate-fixed';
import { createElement, LocateFixed }  from 'lucide';

describe('icon-locate-fixed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLocateFixed],
      html: `<icon-locate-fixed></icon-locate-fixed>`,
    });

    const svg = createElement(LocateFixed);

    expect(page.root).toEqualHtml(`
      <icon-locate-fixed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-locate-fixed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocateFixed],
      html: `<icon-locate-fixed stroke="blue"></icon-locate-fixed>`,
    });

    const svg = createElement(LocateFixed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-locate-fixed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-locate-fixed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocateFixed],
      html: `<icon-locate-fixed stroke-width="2"></icon-locate-fixed>`,
    });

    const svg = createElement(LocateFixed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-locate-fixed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-locate-fixed>
    `);
  });
});
