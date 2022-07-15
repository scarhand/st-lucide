import { newSpecPage } from '@stencil/core/testing';
import { IconGitPullRequestClosed } from '../git-pull-request-closed';
import { createElement, GitPullRequestClosed }  from 'lucide';

describe('icon-git-pull-request-closed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestClosed],
      html: `<icon-git-pull-request-closed></icon-git-pull-request-closed>`,
    });

    const svg = createElement(GitPullRequestClosed);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}">
        ${svg.outerHTML}
      </icon-git-pull-request-closed>
    `);
  });

  it('forwards one-word props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestClosed],
      html: `<icon-git-pull-request-closed stroke="blue"></icon-git-pull-request-closed>`,
    });

    const svg = createElement(GitPullRequestClosed);
    svg.setAttribute('stroke', 'blue');

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke="blue">
        ${svg.outerHTML}
      </icon-git-pull-request-closed>
    `);
  });

  it('forwards dashed props to svg', async () => {
    const page = await newSpecPage({
      components: [IconGitPullRequestClosed],
      html: `<icon-git-pull-request-closed stroke-width="2"></icon-git-pull-request-closed>`,
    });

    const svg = createElement(GitPullRequestClosed);
    svg.setAttribute('stroke-width', 2);

    expect(page.root).toEqualHtml(`
      <icon-git-pull-request-closed class="st-lucide-icon" innerhtml="${svg.outerHTML.replaceAll('"', '&quot;')}" stroke-width="2">
        ${svg.outerHTML}
      </icon-git-pull-request-closed>
    `);
  });
});
