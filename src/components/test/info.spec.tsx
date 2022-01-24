import { newSpecPage } from '@stencil/core/testing';
import { IconInfo } from '../info';
import { createElement, Info }  from 'lucide';

describe('icon-info', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconInfo],
      html: `<icon-info></icon-info>`,
    });

    const svg = createElement(Info);

    expect(page.root).toEqualHtml(`
      <icon-info class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-info>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInfo],
      html: `<icon-info stroke="blue"></icon-info>`,
    });

    const svg = createElement(Info);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-info class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-info>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconInfo],
      html: `<icon-info stroke-width="2"></icon-info>`,
    });

    const svg = createElement(Info);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-info class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-info>
    `);
  });
});
