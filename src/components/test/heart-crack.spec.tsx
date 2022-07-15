import { newSpecPage } from '@stencil/core/testing';
import { IconHeartCrack } from '../heart-crack';
import { createElement, HeartCrack }  from 'lucide';

describe('icon-heart-crack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconHeartCrack],
      html: `<icon-heart-crack></icon-heart-crack>`,
    });

    const svg = createElement(HeartCrack);

    expect(page.root).toEqualHtml(`
      <icon-heart-crack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-heart-crack>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartCrack],
      html: `<icon-heart-crack stroke="blue"></icon-heart-crack>`,
    });

    const svg = createElement(HeartCrack);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-heart-crack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-heart-crack>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconHeartCrack],
      html: `<icon-heart-crack stroke-width="2"></icon-heart-crack>`,
    });

    const svg = createElement(HeartCrack);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-heart-crack class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-heart-crack>
    `);
  });
});
