import { newSpecPage } from '@stencil/core/testing';
import { IconPlay } from '../play';
import { createElement, Play }  from 'lucide';

describe('icon-play', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlay],
      html: `<icon-play></icon-play>`,
    });

    const svg = createElement(Play);

    expect(page.root).toEqualHtml(`
      <icon-play class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-play>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlay],
      html: `<icon-play stroke="blue"></icon-play>`,
    });

    const svg = createElement(Play);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-play class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-play>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlay],
      html: `<icon-play stroke-width="2"></icon-play>`,
    });

    const svg = createElement(Play);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-play class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-play>
    `);
  });
});
