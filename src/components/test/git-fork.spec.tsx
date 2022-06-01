import { newSpecPage } from '@stencil/core/testing';
import { IconGitFork } from '../git-fork';
import { createElement, GitFork }  from 'lucide';

describe('icon-git-fork', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitFork],
      html: `<icon-git-fork></icon-git-fork>`,
    });

    const svg = createElement(GitFork);

    expect(page.root).toEqualHtml(`
      <icon-git-fork class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-fork>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitFork],
      html: `<icon-git-fork stroke="blue"></icon-git-fork>`,
    });

    const svg = createElement(GitFork);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-fork class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-fork>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitFork],
      html: `<icon-git-fork stroke-width="2"></icon-git-fork>`,
    });

    const svg = createElement(GitFork);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-fork class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-fork>
    `);
  });
});
