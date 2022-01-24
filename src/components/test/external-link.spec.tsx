import { newSpecPage } from '@stencil/core/testing';
import { IconExternalLink } from '../external-link';
import { createElement, ExternalLink }  from 'lucide';

describe('icon-external-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconExternalLink],
      html: `<icon-external-link></icon-external-link>`,
    });

    const svg = createElement(ExternalLink);

    expect(page.root).toEqualHtml(`
      <icon-external-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-external-link>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconExternalLink],
      html: `<icon-external-link stroke="blue"></icon-external-link>`,
    });

    const svg = createElement(ExternalLink);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-external-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-external-link>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconExternalLink],
      html: `<icon-external-link stroke-width="2"></icon-external-link>`,
    });

    const svg = createElement(ExternalLink);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-external-link class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-external-link>
    `);
  });
});
