import { newSpecPage } from '@stencil/core/testing';
import { IconDroplet } from '../droplet';
import { createElement, Droplet }  from 'lucide';

describe('icon-droplet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconDroplet],
      html: `<icon-droplet></icon-droplet>`,
    });

    const svg = createElement(Droplet);

    expect(page.root).toEqualHtml(`
      <icon-droplet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-droplet>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDroplet],
      html: `<icon-droplet stroke="blue"></icon-droplet>`,
    });

    const svg = createElement(Droplet);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-droplet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-droplet>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconDroplet],
      html: `<icon-droplet stroke-width="2"></icon-droplet>`,
    });

    const svg = createElement(Droplet);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-droplet class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-droplet>
    `);
  });
});
