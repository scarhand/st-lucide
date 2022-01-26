import { newSpecPage } from '@stencil/core/testing';
import { IconGithub } from '../github';
import { createElement, Github }  from 'lucide';

describe('icon-github', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGithub],
      html: `<icon-github></icon-github>`,
    });

    const svg = createElement(Github);

    expect(page.root).toEqualHtml(`
      <icon-github class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-github>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGithub],
      html: `<icon-github stroke="blue"></icon-github>`,
    });

    const svg = createElement(Github);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-github class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-github>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGithub],
      html: `<icon-github stroke-width="2"></icon-github>`,
    });

    const svg = createElement(Github);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-github class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-github>
    `);
  });
});
