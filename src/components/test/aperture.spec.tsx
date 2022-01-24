import { newSpecPage } from '@stencil/core/testing';
import { IconAperture } from '../aperture';
import { createElement, Aperture }  from 'lucide';

describe('icon-aperture', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconAperture],
      html: `<icon-aperture></icon-aperture>`,
    });

    const svg = createElement(Aperture);

    expect(page.root).toEqualHtml(`
      <icon-aperture class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-aperture>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAperture],
      html: `<icon-aperture stroke="blue"></icon-aperture>`,
    });

    const svg = createElement(Aperture);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-aperture class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-aperture>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconAperture],
      html: `<icon-aperture stroke-width="2"></icon-aperture>`,
    });

    const svg = createElement(Aperture);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-aperture class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-aperture>
    `);
  });
});
