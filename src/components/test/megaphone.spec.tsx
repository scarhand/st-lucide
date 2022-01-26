import { newSpecPage } from '@stencil/core/testing';
import { IconMegaphone } from '../megaphone';
import { createElement, Megaphone }  from 'lucide';

describe('icon-megaphone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMegaphone],
      html: `<icon-megaphone></icon-megaphone>`,
    });

    const svg = createElement(Megaphone);

    expect(page.root).toEqualHtml(`
      <icon-megaphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-megaphone>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMegaphone],
      html: `<icon-megaphone stroke="blue"></icon-megaphone>`,
    });

    const svg = createElement(Megaphone);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-megaphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-megaphone>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMegaphone],
      html: `<icon-megaphone stroke-width="2"></icon-megaphone>`,
    });

    const svg = createElement(Megaphone);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-megaphone class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-megaphone>
    `);
  });
});
