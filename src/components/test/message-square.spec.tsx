import { newSpecPage } from '@stencil/core/testing';
import { IconMessageSquare } from '../message-square';
import { createElement, MessageSquare }  from 'lucide';

describe('icon-message-square', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMessageSquare],
      html: `<icon-message-square></icon-message-square>`,
    });

    const svg = createElement(MessageSquare);

    expect(page.root).toEqualHtml(`
      <icon-message-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-message-square>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMessageSquare],
      html: `<icon-message-square stroke="blue"></icon-message-square>`,
    });

    const svg = createElement(MessageSquare);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-message-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-message-square>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMessageSquare],
      html: `<icon-message-square stroke-width="2"></icon-message-square>`,
    });

    const svg = createElement(MessageSquare);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-message-square class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-message-square>
    `);
  });
});
