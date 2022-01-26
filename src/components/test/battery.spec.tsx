import { newSpecPage } from '@stencil/core/testing';
import { IconBattery } from '../battery';
import { createElement, Battery }  from 'lucide';

describe('icon-battery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBattery],
      html: `<icon-battery></icon-battery>`,
    });

    const svg = createElement(Battery);

    expect(page.root).toEqualHtml(`
      <icon-battery class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-battery>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBattery],
      html: `<icon-battery stroke="blue"></icon-battery>`,
    });

    const svg = createElement(Battery);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-battery class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-battery>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBattery],
      html: `<icon-battery stroke-width="2"></icon-battery>`,
    });

    const svg = createElement(Battery);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-battery class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-battery>
    `);
  });
});
