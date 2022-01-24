import { newSpecPage } from '@stencil/core/testing';
import { IconVolume } from '../volume';
import { createElement, Volume }  from 'lucide';

describe('icon-volume', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVolume],
      html: `<icon-volume></icon-volume>`,
    });

    const svg = createElement(Volume);

    expect(page.root).toEqualHtml(`
      <icon-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-volume>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume],
      html: `<icon-volume stroke="blue"></icon-volume>`,
    });

    const svg = createElement(Volume);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-volume>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolume],
      html: `<icon-volume stroke-width="2"></icon-volume>`,
    });

    const svg = createElement(Volume);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-volume class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-volume>
    `);
  });
});
