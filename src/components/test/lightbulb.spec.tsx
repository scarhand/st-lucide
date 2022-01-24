import { newSpecPage } from '@stencil/core/testing';
import { IconLightbulb } from '../lightbulb';
import { createElement, Lightbulb }  from 'lucide';

describe('icon-lightbulb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLightbulb],
      html: `<icon-lightbulb></icon-lightbulb>`,
    });

    const svg = createElement(Lightbulb);

    expect(page.root).toEqualHtml(`
      <icon-lightbulb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lightbulb>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLightbulb],
      html: `<icon-lightbulb stroke="blue"></icon-lightbulb>`,
    });

    const svg = createElement(Lightbulb);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lightbulb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lightbulb>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLightbulb],
      html: `<icon-lightbulb stroke-width="2"></icon-lightbulb>`,
    });

    const svg = createElement(Lightbulb);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lightbulb class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lightbulb>
    `);
  });
});
