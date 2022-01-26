import { newSpecPage } from '@stencil/core/testing';
import { IconCloudy } from '../cloudy';
import { createElement, Cloudy }  from 'lucide';

describe('icon-cloudy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconCloudy],
      html: `<icon-cloudy></icon-cloudy>`,
    });

    const svg = createElement(Cloudy);

    expect(page.root).toEqualHtml(`
      <icon-cloudy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-cloudy>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudy],
      html: `<icon-cloudy stroke="blue"></icon-cloudy>`,
    });

    const svg = createElement(Cloudy);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-cloudy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-cloudy>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconCloudy],
      html: `<icon-cloudy stroke-width="2"></icon-cloudy>`,
    });

    const svg = createElement(Cloudy);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-cloudy class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-cloudy>
    `);
  });
});
