import { newSpecPage } from '@stencil/core/testing';
import { IconPlayCircle } from '../play-circle';
import { createElement, PlayCircle }  from 'lucide';

describe('icon-play-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPlayCircle],
      html: `<icon-play-circle></icon-play-circle>`,
    });

    const svg = createElement(PlayCircle);

    expect(page.root).toEqualHtml(`
      <icon-play-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-play-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlayCircle],
      html: `<icon-play-circle stroke="blue"></icon-play-circle>`,
    });

    const svg = createElement(PlayCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-play-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-play-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPlayCircle],
      html: `<icon-play-circle stroke-width="2"></icon-play-circle>`,
    });

    const svg = createElement(PlayCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-play-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-play-circle>
    `);
  });
});
