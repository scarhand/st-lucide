import { newSpecPage } from '@stencil/core/testing';
import { IconGitBranch } from '../git-branch';
import { createElement, GitBranch }  from 'lucide';

describe('icon-git-branch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitBranch],
      html: `<icon-git-branch></icon-git-branch>`,
    });

    const svg = createElement(GitBranch);

    expect(page.root).toEqualHtml(`
      <icon-git-branch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-branch>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitBranch],
      html: `<icon-git-branch stroke="blue"></icon-git-branch>`,
    });

    const svg = createElement(GitBranch);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-branch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-branch>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitBranch],
      html: `<icon-git-branch stroke-width="2"></icon-git-branch>`,
    });

    const svg = createElement(GitBranch);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-branch class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-branch>
    `);
  });
});
