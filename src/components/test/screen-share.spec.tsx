import { newSpecPage } from '@stencil/core/testing';
import { IconScreenShare } from '../screen-share';
import { createElement, ScreenShare }  from 'lucide';

describe('icon-screen-share', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScreenShare],
      html: `<icon-screen-share></icon-screen-share>`,
    });

    const svg = createElement(ScreenShare);

    expect(page.root).toEqualHtml(`
      <icon-screen-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-screen-share>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScreenShare],
      html: `<icon-screen-share stroke="blue"></icon-screen-share>`,
    });

    const svg = createElement(ScreenShare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-screen-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-screen-share>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScreenShare],
      html: `<icon-screen-share stroke-width="2"></icon-screen-share>`,
    });

    const svg = createElement(ScreenShare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-screen-share class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-screen-share>
    `);
  });
});
