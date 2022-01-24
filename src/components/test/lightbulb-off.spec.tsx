import { newSpecPage } from '@stencil/core/testing';
import { IconLightbulbOff } from '../lightbulb-off';
import { createElement, LightbulbOff }  from 'lucide';

describe('icon-lightbulb-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLightbulbOff],
      html: `<icon-lightbulb-off></icon-lightbulb-off>`,
    });

    const svg = createElement(LightbulbOff);

    expect(page.root).toEqualHtml(`
      <icon-lightbulb-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-lightbulb-off>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLightbulbOff],
      html: `<icon-lightbulb-off stroke="blue"></icon-lightbulb-off>`,
    });

    const svg = createElement(LightbulbOff);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-lightbulb-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-lightbulb-off>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLightbulbOff],
      html: `<icon-lightbulb-off stroke-width="2"></icon-lightbulb-off>`,
    });

    const svg = createElement(LightbulbOff);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-lightbulb-off class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-lightbulb-off>
    `);
  });
});
