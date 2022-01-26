import { newSpecPage } from '@stencil/core/testing';
import { IconRadioReceiver } from '../radio-receiver';
import { createElement, RadioReceiver }  from 'lucide';

describe('icon-radio-receiver', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconRadioReceiver],
      html: `<icon-radio-receiver></icon-radio-receiver>`,
    });

    const svg = createElement(RadioReceiver);

    expect(page.root).toEqualHtml(`
      <icon-radio-receiver class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-radio-receiver>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRadioReceiver],
      html: `<icon-radio-receiver stroke="blue"></icon-radio-receiver>`,
    });

    const svg = createElement(RadioReceiver);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-radio-receiver class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-radio-receiver>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconRadioReceiver],
      html: `<icon-radio-receiver stroke-width="2"></icon-radio-receiver>`,
    });

    const svg = createElement(RadioReceiver);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-radio-receiver class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-radio-receiver>
    `);
  });
});
