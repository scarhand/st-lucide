import { newSpecPage } from '@stencil/core/testing';
import { IconMedal } from '../medal';
import { createElement, Medal }  from 'lucide';

describe('icon-medal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMedal],
      html: `<icon-medal></icon-medal>`,
    });

    const svg = createElement(Medal);

    expect(page.root).toEqualHtml(`
      <icon-medal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-medal>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMedal],
      html: `<icon-medal stroke="blue"></icon-medal>`,
    });

    const svg = createElement(Medal);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-medal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-medal>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMedal],
      html: `<icon-medal stroke-width="2"></icon-medal>`,
    });

    const svg = createElement(Medal);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-medal class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-medal>
    `);
  });
});
