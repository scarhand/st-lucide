import { newSpecPage } from '@stencil/core/testing';
import { IconBriefcase } from '../briefcase';
import { createElement, Briefcase }  from 'lucide';

describe('icon-briefcase', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconBriefcase],
      html: `<icon-briefcase></icon-briefcase>`,
    });

    const svg = createElement(Briefcase);

    expect(page.root).toEqualHtml(`
      <icon-briefcase class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-briefcase>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBriefcase],
      html: `<icon-briefcase stroke="blue"></icon-briefcase>`,
    });

    const svg = createElement(Briefcase);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-briefcase class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-briefcase>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconBriefcase],
      html: `<icon-briefcase stroke-width="2"></icon-briefcase>`,
    });

    const svg = createElement(Briefcase);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-briefcase class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-briefcase>
    `);
  });
});
