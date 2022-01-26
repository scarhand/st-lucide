import { newSpecPage } from '@stencil/core/testing';
import { IconGitBranchPlus } from '../git-branch-plus';
import { createElement, GitBranchPlus }  from 'lucide';

describe('icon-git-branch-plus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitBranchPlus],
      html: `<icon-git-branch-plus></icon-git-branch-plus>`,
    });

    const svg = createElement(GitBranchPlus);

    expect(page.root).toEqualHtml(`
      <icon-git-branch-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-branch-plus>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitBranchPlus],
      html: `<icon-git-branch-plus stroke="blue"></icon-git-branch-plus>`,
    });

    const svg = createElement(GitBranchPlus);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-branch-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-branch-plus>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitBranchPlus],
      html: `<icon-git-branch-plus stroke-width="2"></icon-git-branch-plus>`,
    });

    const svg = createElement(GitBranchPlus);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-branch-plus class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-branch-plus>
    `);
  });
});
