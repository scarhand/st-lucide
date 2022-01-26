import { newSpecPage } from '@stencil/core/testing';
import { IconVibrate } from '../vibrate';
import { createElement, Vibrate }  from 'lucide';

describe('icon-vibrate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVibrate],
      html: `<icon-vibrate></icon-vibrate>`,
    });

    const svg = createElement(Vibrate);

    expect(page.root).toEqualHtml(`
      <icon-vibrate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-vibrate>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVibrate],
      html: `<icon-vibrate stroke="blue"></icon-vibrate>`,
    });

    const svg = createElement(Vibrate);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-vibrate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-vibrate>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVibrate],
      html: `<icon-vibrate stroke-width="2"></icon-vibrate>`,
    });

    const svg = createElement(Vibrate);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-vibrate class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-vibrate>
    `);
  });
});
