import { newSpecPage } from '@stencil/core/testing';
import { IconTrophy } from '../trophy';
import { createElement, Trophy }  from 'lucide';

describe('icon-trophy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTrophy],
      html: `<icon-trophy></icon-trophy>`,
    });

    const svg = createElement(Trophy);

    expect(page.root).toEqualHtml(`
      <icon-trophy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-trophy>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrophy],
      html: `<icon-trophy stroke="blue"></icon-trophy>`,
    });

    const svg = createElement(Trophy);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-trophy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-trophy>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTrophy],
      html: `<icon-trophy stroke-width="2"></icon-trophy>`,
    });

    const svg = createElement(Trophy);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-trophy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-trophy>
    `);
  });
});
