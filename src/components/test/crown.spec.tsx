import { newSpecPage } from '@stencil/core/testing';
import { IconCrown } from '../crown';
import { createElement, Crown }  from 'lucide';

describe('icon-crown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCrown],
      html: `<icon-crown></icon-crown>`,
    });

    const svg = createElement(Crown);

    expect(page.root).toEqualHtml(`
      <icon-crown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-crown>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrown],
      html: `<icon-crown stroke="blue"></icon-crown>`,
    });

    const svg = createElement(Crown);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-crown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-crown>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCrown],
      html: `<icon-crown stroke-width="2"></icon-crown>`,
    });

    const svg = createElement(Crown);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-crown class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-crown>
    `);
  });
});
