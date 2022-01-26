import { newSpecPage } from '@stencil/core/testing';
import { IconGitlab } from '../gitlab';
import { createElement, Gitlab }  from 'lucide';

describe('icon-gitlab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitlab],
      html: `<icon-gitlab></icon-gitlab>`,
    });

    const svg = createElement(Gitlab);

    expect(page.root).toEqualHtml(`
      <icon-gitlab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-gitlab>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitlab],
      html: `<icon-gitlab stroke="blue"></icon-gitlab>`,
    });

    const svg = createElement(Gitlab);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-gitlab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-gitlab>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitlab],
      html: `<icon-gitlab stroke-width="2"></icon-gitlab>`,
    });

    const svg = createElement(Gitlab);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-gitlab class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-gitlab>
    `);
  });
});
