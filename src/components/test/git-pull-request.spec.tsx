import { newSpecPage } from '@stencil/core/testing';
import { IconGitPullRequest } from '../git-pull-request';
import { createElement, GitPullRequest }  from 'lucide';

describe('icon-git-pull-request', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequest],
      html: `<icon-git-pull-request></icon-git-pull-request>`,
    });

    const svg = createElement(GitPullRequest);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-pull-request>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequest],
      html: `<icon-git-pull-request stroke="blue"></icon-git-pull-request>`,
    });

    const svg = createElement(GitPullRequest);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-pull-request>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequest],
      html: `<icon-git-pull-request stroke-width="2"></icon-git-pull-request>`,
    });

    const svg = createElement(GitPullRequest);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-pull-request>
    `);
  });
});
