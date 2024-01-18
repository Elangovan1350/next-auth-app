export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl capitalize font-medium py-2">
      <h1 className="text-4xl font-bold mb-5">user profile</h1>
      <hr />
      <p>user profile page</p>
      <p className="p-2 mt-2 bg-orange-500 rounded">{params.id}</p>
    </div>
  );
}
