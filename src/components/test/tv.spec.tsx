import { newSpecPage } from '@stencil/core/testing';
import { IconTv } from '../tv';
import { createElement, Tv }  from 'lucide';

describe('icon-tv', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTv],
      html: `<icon-tv></icon-tv>`,
    });

    const svg = createElement(Tv);

    expect(page.root).toEqualHtml(`
      <icon-tv class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-tv>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTv],
      html: `<icon-tv stroke="blue"></icon-tv>`,
    });

    const svg = createElement(Tv);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-tv class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-tv>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTv],
      html: `<icon-tv stroke-width="2"></icon-tv>`,
    });

    const svg = createElement(Tv);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-tv class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-tv>
    `);
  });
});
