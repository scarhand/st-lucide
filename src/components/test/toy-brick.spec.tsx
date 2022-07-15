import { newSpecPage } from '@stencil/core/testing';
import { IconToyBrick } from '../toy-brick';
import { createElement, ToyBrick }  from 'lucide';

describe('icon-toy-brick', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconToyBrick],
      html: `<icon-toy-brick></icon-toy-brick>`,
    });

    const svg = createElement(ToyBrick);

    expect(page.root).toEqualHtml(`
      <icon-toy-brick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-toy-brick>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToyBrick],
      html: `<icon-toy-brick stroke="blue"></icon-toy-brick>`,
    });

    const svg = createElement(ToyBrick);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-toy-brick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-toy-brick>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconToyBrick],
      html: `<icon-toy-brick stroke-width="2"></icon-toy-brick>`,
    });

    const svg = createElement(ToyBrick);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-toy-brick class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-toy-brick>
    `);
  });
});
