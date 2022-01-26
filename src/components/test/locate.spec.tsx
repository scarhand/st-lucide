import { newSpecPage } from '@stencil/core/testing';
import { IconLocate } from '../locate';
import { createElement, Locate }  from 'lucide';

describe('icon-locate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLocate],
      html: `<icon-locate></icon-locate>`,
    });

    const svg = createElement(Locate);

    expect(page.root).toEqualHtml(`
      <icon-locate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-locate>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocate],
      html: `<icon-locate stroke="blue"></icon-locate>`,
    });

    const svg = createElement(Locate);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-locate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-locate>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLocate],
      html: `<icon-locate stroke-width="2"></icon-locate>`,
    });

    const svg = createElement(Locate);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-locate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-locate>
    `);
  });
});
