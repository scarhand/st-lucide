import { newSpecPage } from '@stencil/core/testing';
import { IconHeartOff } from '../heart-off';
import { createElement, HeartOff }  from 'lucide';

describe('icon-heart-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeartOff],
      html: `<icon-heart-off></icon-heart-off>`,
    });

    const svg = createElement(HeartOff);

    expect(page.root).toEqualHtml(`
      <icon-heart-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-heart-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartOff],
      html: `<icon-heart-off stroke="blue"></icon-heart-off>`,
    });

    const svg = createElement(HeartOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-heart-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-heart-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartOff],
      html: `<icon-heart-off stroke-width="2"></icon-heart-off>`,
    });

    const svg = createElement(HeartOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-heart-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-heart-off>
    `);
  });
});
