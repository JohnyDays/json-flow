# JSON -> Flow

Turns JSON payloads into simple flow type annotations

Install: `npm install -g json-flow`

Use: `json-flow $JSON_FILENAME`

```

Options:

  -h, --help              output usage information
  -t, --tabs              Use tabs instead of spaces
  -s, --space-amount <n>  How many spaces to use for indentation

```
Also accepts input from stdin if that tickles your fancy, such as:
```
curl -s https://api.github.com/users/johnydays/repos | json-flow
```

Example output
```javascript
{
  id: number,
  name: string,
  full_name: string,
  owner: {
    login: string,
    id: number,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
  },
  private: boolean,
  html_url: string,
  description: string,
  fork: boolean,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  teams_url: string,
  hooks_url: string,
  issue_events_url: string,
  events_url: string,
  assignees_url: string,
  branches_url: string,
  tags_url: string,
  blobs_url: string,
  git_tags_url: string,
  git_refs_url: string,
  trees_url: string,
  statuses_url: string,
  languages_url: string,
  stargazers_url: string,
  contributors_url: string,
  subscribers_url: string,
  subscription_url: string,
  commits_url: string,
  git_commits_url: string,
  comments_url: string,
  issue_comment_url: string,
  contents_url: string,
  compare_url: string,
  merges_url: string,
  archive_url: string,
  downloads_url: string,
  issues_url: string,
  pulls_url: string,
  milestones_url: string,
  notifications_url: string,
  labels_url: string,
  releases_url: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: void,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  has_issues: boolean,
  has_downloads: boolean,
  has_wiki: boolean,
  has_pages: boolean,
  forks_count: number,
  mirror_url: void,
  open_issues_count: number,
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string,
}[]

```
