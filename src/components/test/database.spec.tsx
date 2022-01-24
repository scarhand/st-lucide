import { newSpecPage } from '@stencil/core/testing';
import { IconDatabase } from '../database';
import { createElement, Database }  from 'lucide';

describe('icon-database', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDatabase],
      html: `<icon-database></icon-database>`,
    });

    const svg = createElement(Database);

    expect(page.root).toEqualHtml(`
      <icon-database class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-database>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDatabase],
      html: `<icon-database stroke="blue"></icon-database>`,
    });

    const svg = createElement(Database);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-database class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-database>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDatabase],
      html: `<icon-database stroke-width="2"></icon-database>`,
    });

    const svg = createElement(Database);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-database class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-database>
    `);
  });
});
