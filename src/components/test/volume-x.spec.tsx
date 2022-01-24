import { newSpecPage } from '@stencil/core/testing';
import { IconVolumeX } from '../volume-x';
import { createElement, VolumeX }  from 'lucide';

describe('icon-volume-x', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconVolumeX],
      html: `<icon-volume-x></icon-volume-x>`,
    });

    const svg = createElement(VolumeX);

    expect(page.root).toEqualHtml(`
      <icon-volume-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-volume-x>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolumeX],
      html: `<icon-volume-x stroke="blue"></icon-volume-x>`,
    });

    const svg = createElement(VolumeX);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-volume-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-volume-x>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconVolumeX],
      html: `<icon-volume-x stroke-width="2"></icon-volume-x>`,
    });

    const svg = createElement(VolumeX);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-volume-x class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-volume-x>
    `);
  });
});
