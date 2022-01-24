import { newSpecPage } from '@stencil/core/testing';
import { IconSettings } from '../settings';
import { createElement, Settings }  from 'lucide';

describe('icon-settings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSettings],
      html: `<icon-settings></icon-settings>`,
    });

    const svg = createElement(Settings);

    expect(page.root).toEqualHtml(`
      <icon-settings class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-settings>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSettings],
      html: `<icon-settings stroke="blue"></icon-settings>`,
    });

    const svg = createElement(Settings);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-settings class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-settings>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSettings],
      html: `<icon-settings stroke-width="2"></icon-settings>`,
    });

    const svg = createElement(Settings);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-settings class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-settings>
    `);
  });
});
