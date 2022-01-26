import { newSpecPage } from '@stencil/core/testing';
import { IconLoader } from '../loader';
import { createElement, Loader }  from 'lucide';

describe('icon-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLoader],
      html: `<icon-loader></icon-loader>`,
    });

    const svg = createElement(Loader);

    expect(page.root).toEqualHtml(`
      <icon-loader class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-loader>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLoader],
      html: `<icon-loader stroke="blue"></icon-loader>`,
    });

    const svg = createElement(Loader);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-loader class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-loader>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLoader],
      html: `<icon-loader stroke-width="2"></icon-loader>`,
    });

    const svg = createElement(Loader);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-loader class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-loader>
    `);
  });
});
