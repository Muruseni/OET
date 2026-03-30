import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading user...</p>;
  if (!user) return <p className="text-center mt-10">User not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Users
      </Link>

      <div className="mt-4 p-6 border rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p>
            <strong>Address:</strong>{" "}
            {user.address?.street}, {user.address?.city}
          </p>
        </div>
      </div>
    </div>
  );
}