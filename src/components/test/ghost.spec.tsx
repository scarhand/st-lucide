import { newSpecPage } from '@stencil/core/testing';
import { IconGhost } from '../ghost';
import { createElement, Ghost }  from 'lucide';

describe('icon-ghost', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGhost],
      html: `<icon-ghost></icon-ghost>`,
    });

    const svg = createElement(Ghost);

    expect(page.root).toEqualHtml(`
      <icon-ghost class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-ghost>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGhost],
      html: `<icon-ghost stroke="blue"></icon-ghost>`,
    });

    const svg = createElement(Ghost);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-ghost class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-ghost>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGhost],
      html: `<icon-ghost stroke-width="2"></icon-ghost>`,
    });

    const svg = createElement(Ghost);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-ghost class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-ghost>
    `);
  });
});
