import { newSpecPage } from '@stencil/core/testing';
import { IconRadio } from '../radio';
import { createElement, Radio }  from 'lucide';

describe('icon-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRadio],
      html: `<icon-radio></icon-radio>`,
    });

    const svg = createElement(Radio);

    expect(page.root).toEqualHtml(`
      <icon-radio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-radio>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRadio],
      html: `<icon-radio stroke="blue"></icon-radio>`,
    });

    const svg = createElement(Radio);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-radio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-radio>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRadio],
      html: `<icon-radio stroke-width="2"></icon-radio>`,
    });

    const svg = createElement(Radio);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-radio class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-radio>
    `);
  });
});
