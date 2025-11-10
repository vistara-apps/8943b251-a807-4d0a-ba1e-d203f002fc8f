import React, { useState, useEffect } from 'react';
import { fetchWatchedIssues, GitHubIssue } from '../githubApi';
import { convertIssueToPR } from '../aiService';

const watchedRepos = [
  { owner: 'facebook', repo: 'react' },
  // Add more watched repos here
];

export const BugList: React.FC = () => {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [converting, setConverting] = useState<number | null>(null);

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const fetchedIssues = await fetchWatchedIssues(watchedRepos);
        setIssues(fetchedIssues);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      } finally {
        setLoading(false);
      }
    };
    loadIssues();
  }, []);

  const handleConvertToPR = async (issue: GitHubIssue) => {
    setConverting(issue.id);
    try {
      const prDescription = await convertIssueToPR({ title: issue.title, body: issue.body || '' });
      // In a real app, you might create the PR via GitHub API or display the description
      alert(`Generated PR Description:\n\n${prDescription}`);
    } catch (error) {
      console.error('Failed to convert issue to PR:', error);
      alert('Failed to convert issue to PR');
    } finally {
      setConverting(null);
    }
  };

  if (loading) {
    return <div className="p-4">Loading issues...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bug List</h2>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <ul className="space-y-4">
          {issues.map((issue) => (
            <li key={issue.id} className="border p-4 rounded">
              <h3 className="font-semibold">{issue.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{issue.state}</p>
              <p className="mb-2">{issue.body ? issue.body.substring(0, 200) + '...' : 'No description'}</p>
              <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-2">View Issue</a>
              <button
                onClick={() => handleConvertToPR(issue)}
                disabled={converting === issue.id}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {converting === issue.id ? 'Converting...' : 'Convert to PR'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};