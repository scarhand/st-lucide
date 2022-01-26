import { newSpecPage } from '@stencil/core/testing';
import { IconDroplets } from '../droplets';
import { createElement, Droplets }  from 'lucide';

describe('icon-droplets', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDroplets],
      html: `<icon-droplets></icon-droplets>`,
    });

    const svg = createElement(Droplets);

    expect(page.root).toEqualHtml(`
      <icon-droplets class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-droplets>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDroplets],
      html: `<icon-droplets stroke="blue"></icon-droplets>`,
    });

    const svg = createElement(Droplets);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-droplets class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-droplets>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDroplets],
      html: `<icon-droplets stroke-width="2"></icon-droplets>`,
    });

    const svg = createElement(Droplets);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-droplets class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-droplets>
    `);
  });
});
