import { newSpecPage } from '@stencil/core/testing';
import { IconUmbrella } from '../umbrella';
import { createElement, Umbrella }  from 'lucide';

describe('icon-umbrella', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconUmbrella],
      html: `<icon-umbrella></icon-umbrella>`,
    });

    const svg = createElement(Umbrella);

    expect(page.root).toEqualHtml(`
      <icon-umbrella class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-umbrella>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUmbrella],
      html: `<icon-umbrella stroke="blue"></icon-umbrella>`,
    });

    const svg = createElement(Umbrella);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-umbrella class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-umbrella>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconUmbrella],
      html: `<icon-umbrella stroke-width="2"></icon-umbrella>`,
    });

    const svg = createElement(Umbrella);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-umbrella class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-umbrella>
    `);
  });
});
