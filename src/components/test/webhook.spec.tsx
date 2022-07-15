import { newSpecPage } from '@stencil/core/testing';
import { IconWebhook } from '../webhook';
import { createElement, Webhook }  from 'lucide';

describe('icon-webhook', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconWebhook],
      html: `<icon-webhook></icon-webhook>`,
    });

    const svg = createElement(Webhook);

    expect(page.root).toEqualHtml(`
      <icon-webhook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-webhook>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWebhook],
      html: `<icon-webhook stroke="blue"></icon-webhook>`,
    });

    const svg = createElement(Webhook);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-webhook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-webhook>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconWebhook],
      html: `<icon-webhook stroke-width="2"></icon-webhook>`,
    });

    const svg = createElement(Webhook);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-webhook class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-webhook>
    `);
  });
});
