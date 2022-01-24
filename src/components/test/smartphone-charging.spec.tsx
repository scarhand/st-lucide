import { newSpecPage } from '@stencil/core/testing';
import { IconSmartphoneCharging } from '../smartphone-charging';
import { createElement, SmartphoneCharging }  from 'lucide';

describe('icon-smartphone-charging', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSmartphoneCharging],
      html: `<icon-smartphone-charging></icon-smartphone-charging>`,
    });

    const svg = createElement(SmartphoneCharging);

    expect(page.root).toEqualHtml(`
      <icon-smartphone-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-smartphone-charging>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmartphoneCharging],
      html: `<icon-smartphone-charging stroke="blue"></icon-smartphone-charging>`,
    });

    const svg = createElement(SmartphoneCharging);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-smartphone-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-smartphone-charging>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSmartphoneCharging],
      html: `<icon-smartphone-charging stroke-width="2"></icon-smartphone-charging>`,
    });

    const svg = createElement(SmartphoneCharging);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-smartphone-charging class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-smartphone-charging>
    `);
  });
});
