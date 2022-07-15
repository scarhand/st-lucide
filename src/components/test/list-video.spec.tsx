import { newSpecPage } from '@stencil/core/testing';
import { IconListVideo } from '../list-video';
import { createElement, ListVideo }  from 'lucide';

describe('icon-list-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconListVideo],
      html: `<icon-list-video></icon-list-video>`,
    });

    const svg = createElement(ListVideo);

    expect(page.root).toEqualHtml(`
      <icon-list-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-list-video>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListVideo],
      html: `<icon-list-video stroke="blue"></icon-list-video>`,
    });

    const svg = createElement(ListVideo);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-list-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-list-video>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconListVideo],
      html: `<icon-list-video stroke-width="2"></icon-list-video>`,
    });

    const svg = createElement(ListVideo);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-list-video class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-list-video>
    `);
  });
});
