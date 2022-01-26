import { newSpecPage } from '@stencil/core/testing';
import { IconBeaker } from '../beaker';
import { createElement, Beaker }  from 'lucide';

describe('icon-beaker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBeaker],
      html: `<icon-beaker></icon-beaker>`,
    });

    const svg = createElement(Beaker);

    expect(page.root).toEqualHtml(`
      <icon-beaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-beaker>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBeaker],
      html: `<icon-beaker stroke="blue"></icon-beaker>`,
    });

    const svg = createElement(Beaker);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-beaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-beaker>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBeaker],
      html: `<icon-beaker stroke-width="2"></icon-beaker>`,
    });

    const svg = createElement(Beaker);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-beaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-beaker>
    `);
  });
});
