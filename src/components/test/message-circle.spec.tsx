import { newSpecPage } from '@stencil/core/testing';
import { IconMessageCircle } from '../message-circle';
import { createElement, MessageCircle }  from 'lucide';

describe('icon-message-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMessageCircle],
      html: `<icon-message-circle></icon-message-circle>`,
    });

    const svg = createElement(MessageCircle);

    expect(page.root).toEqualHtml(`
      <icon-message-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-message-circle>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMessageCircle],
      html: `<icon-message-circle stroke="blue"></icon-message-circle>`,
    });

    const svg = createElement(MessageCircle);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-message-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-message-circle>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMessageCircle],
      html: `<icon-message-circle stroke-width="2"></icon-message-circle>`,
    });

    const svg = createElement(MessageCircle);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-message-circle class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-message-circle>
    `);
  });
});
