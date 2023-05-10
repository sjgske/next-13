import Link from "next/link";

async function fetchRepoContents(name: string) {
  // wait 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/sjgske/${name}/contents`,
    {
      next: {
        revalidate: 60, // 캐시 시간
      },
    }
  );
  const contents = await response.json();
  const dirs = contents.filter((content: any) => content.type === "dir");
  return dirs;
}

const RepoDirs = async ({ name }: { name: string }) => {
  const dirs = await fetchRepoContents(name);
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
