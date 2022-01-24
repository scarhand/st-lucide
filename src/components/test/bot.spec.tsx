import { newSpecPage } from '@stencil/core/testing';
import { IconBot } from '../bot';
import { createElement, Bot }  from 'lucide';

describe('icon-bot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBot],
      html: `<icon-bot></icon-bot>`,
    });

    const svg = createElement(Bot);

    expect(page.root).toEqualHtml(`
      <icon-bot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-bot>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBot],
      html: `<icon-bot stroke="blue"></icon-bot>`,
    });

    const svg = createElement(Bot);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-bot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-bot>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBot],
      html: `<icon-bot stroke-width="2"></icon-bot>`,
    });

    const svg = createElement(Bot);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-bot class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-bot>
    `);
  });
});
