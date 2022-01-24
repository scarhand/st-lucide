import { newSpecPage } from '@stencil/core/testing';
import { IconPipette } from '../pipette';
import { createElement, Pipette }  from 'lucide';

describe('icon-pipette', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconPipette],
      html: `<icon-pipette></icon-pipette>`,
    });

    const svg = createElement(Pipette);

    expect(page.root).toEqualHtml(`
      <icon-pipette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-pipette>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPipette],
      html: `<icon-pipette stroke="blue"></icon-pipette>`,
    });

    const svg = createElement(Pipette);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-pipette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-pipette>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconPipette],
      html: `<icon-pipette stroke-width="2"></icon-pipette>`,
    });

    const svg = createElement(Pipette);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-pipette class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-pipette>
    `);
  });
});
