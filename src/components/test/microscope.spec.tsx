import { newSpecPage } from '@stencil/core/testing';
import { IconMicroscope } from '../microscope';
import { createElement, Microscope }  from 'lucide';

describe('icon-microscope', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconMicroscope],
      html: `<icon-microscope></icon-microscope>`,
    });

    const svg = createElement(Microscope);

    expect(page.root).toEqualHtml(`
      <icon-microscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-microscope>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMicroscope],
      html: `<icon-microscope stroke="blue"></icon-microscope>`,
    });

    const svg = createElement(Microscope);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-microscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-microscope>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconMicroscope],
      html: `<icon-microscope stroke-width="2"></icon-microscope>`,
    });

    const svg = createElement(Microscope);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-microscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-microscope>
    `);
  });
});
