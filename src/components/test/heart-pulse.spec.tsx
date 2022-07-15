import { newSpecPage } from '@stencil/core/testing';
import { IconHeartPulse } from '../heart-pulse';
import { createElement, HeartPulse }  from 'lucide';

describe('icon-heart-pulse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeartPulse],
      html: `<icon-heart-pulse></icon-heart-pulse>`,
    });

    const svg = createElement(HeartPulse);

    expect(page.root).toEqualHtml(`
      <icon-heart-pulse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-heart-pulse>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartPulse],
      html: `<icon-heart-pulse stroke="blue"></icon-heart-pulse>`,
    });

    const svg = createElement(HeartPulse);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-heart-pulse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-heart-pulse>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartPulse],
      html: `<icon-heart-pulse stroke-width="2"></icon-heart-pulse>`,
    });

    const svg = createElement(HeartPulse);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-heart-pulse class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-heart-pulse>
    `);
  });
});
