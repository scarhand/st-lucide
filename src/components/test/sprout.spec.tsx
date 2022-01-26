import { newSpecPage } from '@stencil/core/testing';
import { IconSprout } from '../sprout';
import { createElement, Sprout }  from 'lucide';

describe('icon-sprout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSprout],
      html: `<icon-sprout></icon-sprout>`,
    });

    const svg = createElement(Sprout);

    expect(page.root).toEqualHtml(`
      <icon-sprout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sprout>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSprout],
      html: `<icon-sprout stroke="blue"></icon-sprout>`,
    });

    const svg = createElement(Sprout);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sprout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sprout>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSprout],
      html: `<icon-sprout stroke-width="2"></icon-sprout>`,
    });

    const svg = createElement(Sprout);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sprout class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sprout>
    `);
  });
});
