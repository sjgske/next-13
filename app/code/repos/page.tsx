import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, FaCode } from "react-icons/fa";

interface IRepo {
  id: number;
  name: string;
  [x: string]: any;
}

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/sjgske/repos", {
    next: {
      revalidate: 60, // 캐시 시간
    },
  });
  // Wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

// Server components
// Data Fetching

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo: IRepo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
