import { newSpecPage } from '@stencil/core/testing';
import { IconScreenShareOff } from '../screen-share-off';
import { createElement, ScreenShareOff }  from 'lucide';

describe('icon-screen-share-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconScreenShareOff],
      html: `<icon-screen-share-off></icon-screen-share-off>`,
    });

    const svg = createElement(ScreenShareOff);

    expect(page.root).toEqualHtml(`
      <icon-screen-share-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-screen-share-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScreenShareOff],
      html: `<icon-screen-share-off stroke="blue"></icon-screen-share-off>`,
    });

    const svg = createElement(ScreenShareOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-screen-share-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-screen-share-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconScreenShareOff],
      html: `<icon-screen-share-off stroke-width="2"></icon-screen-share-off>`,
    });

    const svg = createElement(ScreenShareOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-screen-share-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-screen-share-off>
    `);
  });
});
