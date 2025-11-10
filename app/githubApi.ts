const GITHUB_API_BASE = 'https://api.github.com';

export interface GitHubIssue {
  id: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  html_url: string;
  repository_url: string;
  // Add more fields as needed
}

export async function fetchIssuesFromRepo(owner: string, repo: string): Promise<GitHubIssue[]> {
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/issues`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch issues: ${response.statusText}`);
  }
  return response.json();
}

// Function to fetch issues from multiple watched repos
export async function fetchWatchedIssues(watchedRepos: { owner: string; repo: string }[]): Promise<GitHubIssue[]> {
  const allIssues: GitHubIssue[] = [];
  for (const { owner, repo } of watchedRepos) {
    const issues = await fetchIssuesFromRepo(owner, repo);
    allIssues.push(...issues);
  }
  return allIssues;
}