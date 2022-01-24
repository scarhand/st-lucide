import { newSpecPage } from '@stencil/core/testing';
import { IconJapaneseYen } from '../japanese-yen';
import { createElement, JapaneseYen }  from 'lucide';

describe('icon-japanese-yen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconJapaneseYen],
      html: `<icon-japanese-yen></icon-japanese-yen>`,
    });

    const svg = createElement(JapaneseYen);

    expect(page.root).toEqualHtml(`
      <icon-japanese-yen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-japanese-yen>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconJapaneseYen],
      html: `<icon-japanese-yen stroke="blue"></icon-japanese-yen>`,
    });

    const svg = createElement(JapaneseYen);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-japanese-yen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-japanese-yen>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconJapaneseYen],
      html: `<icon-japanese-yen stroke-width="2"></icon-japanese-yen>`,
    });

    const svg = createElement(JapaneseYen);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-japanese-yen class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-japanese-yen>
    `);
  });
});
