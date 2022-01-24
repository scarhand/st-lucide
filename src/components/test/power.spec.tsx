import { newSpecPage } from '@stencil/core/testing';
import { IconPower } from '../power';
import { createElement, Power }  from 'lucide';

describe('icon-power', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPower],
      html: `<icon-power></icon-power>`,
    });

    const svg = createElement(Power);

    expect(page.root).toEqualHtml(`
      <icon-power class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-power>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPower],
      html: `<icon-power stroke="blue"></icon-power>`,
    });

    const svg = createElement(Power);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-power class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-power>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPower],
      html: `<icon-power stroke-width="2"></icon-power>`,
    });

    const svg = createElement(Power);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-power class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-power>
    `);
  });
});
