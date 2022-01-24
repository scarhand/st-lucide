import { newSpecPage } from '@stencil/core/testing';
import { IconSpeaker } from '../speaker';
import { createElement, Speaker }  from 'lucide';

describe('icon-speaker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconSpeaker],
      html: `<icon-speaker></icon-speaker>`,
    });

    const svg = createElement(Speaker);

    expect(page.root).toEqualHtml(`
      <icon-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-speaker>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSpeaker],
      html: `<icon-speaker stroke="blue"></icon-speaker>`,
    });

    const svg = createElement(Speaker);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-speaker>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconSpeaker],
      html: `<icon-speaker stroke-width="2"></icon-speaker>`,
    });

    const svg = createElement(Speaker);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-speaker class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-speaker>
    `);
  });
});
