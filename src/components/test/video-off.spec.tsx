import { newSpecPage } from '@stencil/core/testing';
import { IconVideoOff } from '../video-off';
import { createElement, VideoOff }  from 'lucide';

describe('icon-video-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVideoOff],
      html: `<icon-video-off></icon-video-off>`,
    });

    const svg = createElement(VideoOff);

    expect(page.root).toEqualHtml(`
      <icon-video-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-video-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVideoOff],
      html: `<icon-video-off stroke="blue"></icon-video-off>`,
    });

    const svg = createElement(VideoOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-video-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-video-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVideoOff],
      html: `<icon-video-off stroke-width="2"></icon-video-off>`,
    });

    const svg = createElement(VideoOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-video-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-video-off>
    `);
  });
});
