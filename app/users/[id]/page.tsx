
import { notFound } from 'next/navigation';
type UserIdParams = {
  id: string;
};

interface PageProps {
  params: Promise<UserIdParams>;
}


const UserId = async ({ params }: PageProps) => {
  const { id } = await params;

  if (parseInt(id) > 10) {
    console.log(notFound());
    notFound();
  }

  return (
    <div>
      <h1>User Page</h1>
      <p>userId is: {id}</p>
    </div>
  );
}

export default UserId;