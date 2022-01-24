import { newSpecPage } from '@stencil/core/testing';
import { IconTwitch } from '../twitch';
import { createElement, Twitch }  from 'lucide';

describe('icon-twitch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconTwitch],
      html: `<icon-twitch></icon-twitch>`,
    });

    const svg = createElement(Twitch);

    expect(page.root).toEqualHtml(`
      <icon-twitch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-twitch>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTwitch],
      html: `<icon-twitch stroke="blue"></icon-twitch>`,
    });

    const svg = createElement(Twitch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-twitch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-twitch>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconTwitch],
      html: `<icon-twitch stroke-width="2"></icon-twitch>`,
    });

    const svg = createElement(Twitch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-twitch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-twitch>
    `);
  });
});
