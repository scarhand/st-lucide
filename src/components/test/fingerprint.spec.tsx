import { newSpecPage } from '@stencil/core/testing';
import { IconFingerprint } from '../fingerprint';
import { createElement, Fingerprint }  from 'lucide';

describe('icon-fingerprint', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconFingerprint],
      html: `<icon-fingerprint></icon-fingerprint>`,
    });

    const svg = createElement(Fingerprint);

    expect(page.root).toEqualHtml(`
      <icon-fingerprint class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-fingerprint>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFingerprint],
      html: `<icon-fingerprint stroke="blue"></icon-fingerprint>`,
    });

    const svg = createElement(Fingerprint);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-fingerprint class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-fingerprint>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconFingerprint],
      html: `<icon-fingerprint stroke-width="2"></icon-fingerprint>`,
    });

    const svg = createElement(Fingerprint);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-fingerprint class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-fingerprint>
    `);
  });
});
