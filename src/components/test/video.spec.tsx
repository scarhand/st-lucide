import { newSpecPage } from '@stencil/core/testing';
import { IconVideo } from '../video';
import { createElement, Video }  from 'lucide';

describe('icon-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVideo],
      html: `<icon-video></icon-video>`,
    });

    const svg = createElement(Video);

    expect(page.root).toEqualHtml(`
      <icon-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-video>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVideo],
      html: `<icon-video stroke="blue"></icon-video>`,
    });

    const svg = createElement(Video);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-video>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVideo],
      html: `<icon-video stroke-width="2"></icon-video>`,
    });

    const svg = createElement(Video);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-video>
    `);
  });
});
