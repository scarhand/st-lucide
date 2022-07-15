import { newSpecPage } from '@stencil/core/testing';
import { IconHeartHandshake } from '../heart-handshake';
import { createElement, HeartHandshake }  from 'lucide';

describe('icon-heart-handshake', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeartHandshake],
      html: `<icon-heart-handshake></icon-heart-handshake>`,
    });

    const svg = createElement(HeartHandshake);

    expect(page.root).toEqualHtml(`
      <icon-heart-handshake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-heart-handshake>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartHandshake],
      html: `<icon-heart-handshake stroke="blue"></icon-heart-handshake>`,
    });

    const svg = createElement(HeartHandshake);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-heart-handshake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-heart-handshake>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartHandshake],
      html: `<icon-heart-handshake stroke-width="2"></icon-heart-handshake>`,
    });

    const svg = createElement(HeartHandshake);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-heart-handshake class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-heart-handshake>
    `);
  });
});
