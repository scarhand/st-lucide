import { newSpecPage } from '@stencil/core/testing';
import { IconPodcast } from '../podcast';
import { createElement, Podcast }  from 'lucide';

describe('icon-podcast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPodcast],
      html: `<icon-podcast></icon-podcast>`,
    });

    const svg = createElement(Podcast);

    expect(page.root).toEqualHtml(`
      <icon-podcast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-podcast>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPodcast],
      html: `<icon-podcast stroke="blue"></icon-podcast>`,
    });

    const svg = createElement(Podcast);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-podcast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-podcast>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPodcast],
      html: `<icon-podcast stroke-width="2"></icon-podcast>`,
    });

    const svg = createElement(Podcast);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-podcast class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-podcast>
    `);
  });
});
