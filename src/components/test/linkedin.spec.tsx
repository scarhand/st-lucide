import { newSpecPage } from '@stencil/core/testing';
import { IconLinkedin } from '../linkedin';
import { createElement, Linkedin }  from 'lucide';

describe('icon-linkedin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconLinkedin],
      html: `<icon-linkedin></icon-linkedin>`,
    });

    const svg = createElement(Linkedin);

    expect(page.root).toEqualHtml(`
      <icon-linkedin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-linkedin>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLinkedin],
      html: `<icon-linkedin stroke="blue"></icon-linkedin>`,
    });

    const svg = createElement(Linkedin);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-linkedin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-linkedin>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconLinkedin],
      html: `<icon-linkedin stroke-width="2"></icon-linkedin>`,
    });

    const svg = createElement(Linkedin);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-linkedin class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-linkedin>
    `);
  });
});
