import { newSpecPage } from '@stencil/core/testing';
import { IconSunset } from '../sunset';
import { createElement, Sunset }  from 'lucide';

describe('icon-sunset', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSunset],
      html: `<icon-sunset></icon-sunset>`,
    });

    const svg = createElement(Sunset);

    expect(page.root).toEqualHtml(`
      <icon-sunset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-sunset>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunset],
      html: `<icon-sunset stroke="blue"></icon-sunset>`,
    });

    const svg = createElement(Sunset);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-sunset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-sunset>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSunset],
      html: `<icon-sunset stroke-width="2"></icon-sunset>`,
    });

    const svg = createElement(Sunset);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-sunset class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-sunset>
    `);
  });
});
