import { newSpecPage } from '@stencil/core/testing';
import { IconStethoscope } from '../stethoscope';
import { createElement, Stethoscope }  from 'lucide';

describe('icon-stethoscope', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconStethoscope],
      html: `<icon-stethoscope></icon-stethoscope>`,
    });

    const svg = createElement(Stethoscope);

    expect(page.root).toEqualHtml(`
      <icon-stethoscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-stethoscope>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStethoscope],
      html: `<icon-stethoscope stroke="blue"></icon-stethoscope>`,
    });

    const svg = createElement(Stethoscope);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-stethoscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-stethoscope>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconStethoscope],
      html: `<icon-stethoscope stroke-width="2"></icon-stethoscope>`,
    });

    const svg = createElement(Stethoscope);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-stethoscope class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-stethoscope>
    `);
  });
});
