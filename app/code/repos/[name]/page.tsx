import Link from "next/link";
import Repo from "app/components/Repo";
import RepoDirs from "app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>loading...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        {/* 로딩 3초 걸리는 컴포넌트 */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
