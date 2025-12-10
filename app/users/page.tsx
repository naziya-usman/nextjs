import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UserPage = async ({ searchParams }: { searchParams: Promise<{ sortOrder?: string }> }) => {

  const sortOrder = (await searchParams).sortOrder;


  return (
    <div className="flex flex-col gap-4 p-8 items-center ">
      <h1>User Page</h1>

      <Link href="/users/new" className="btn">Create User </Link>
      <Suspense fallback={<div>Loading users...</div>}>
        <UserTable sortOrder={sortOrder || ''} />
      </Suspense>
    </div>

  );
};

export default UserPage;
