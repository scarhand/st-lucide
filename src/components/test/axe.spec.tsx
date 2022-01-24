import { newSpecPage } from '@stencil/core/testing';
import { IconAxe } from '../axe';
import { createElement, Axe }  from 'lucide';

describe('icon-axe', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAxe],
      html: `<icon-axe></icon-axe>`,
    });

    const svg = createElement(Axe);

    expect(page.root).toEqualHtml(`
      <icon-axe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-axe>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAxe],
      html: `<icon-axe stroke="blue"></icon-axe>`,
    });

    const svg = createElement(Axe);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-axe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-axe>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAxe],
      html: `<icon-axe stroke-width="2"></icon-axe>`,
    });

    const svg = createElement(Axe);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-axe class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-axe>
    `);
  });
});
