"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, UserX, X } from "lucide-react";

interface Admin {
  _id: string;
  username: string;
  createdAt: string;
}

export default function AdminAdminsPage() {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchAdmins = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/admin");
      if (res.status === 401) {
        const slug = window.location.pathname.split("/")[1];
        router.push(`/${slug}`);
        return;
      }
      const data = await res.json();
      setAdmins(data.admins);
    } catch {
      console.error("Failed to fetch admins");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setCreating(true);

    try {
      const res = await fetch("/api/admin/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create admin");
        return;
      }

      setAdmins((prev) => [data.admin, ...prev]);
      setShowCreate(false);
      setNewUsername("");
      setNewPassword("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: string, username: string) => {
    if (!confirm(`Delete admin "${username}"? This cannot be undone.`)) return;

    try {
      const res = await fetch("/api/admin/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setAdmins((prev) => prev.filter((a) => a._id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete admin");
      }
    } catch {
      console.error("Failed to delete admin");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Manage Admins</h1>
          <p className="text-sm text-navy-400">
            {admins.length} admin{admins.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 rounded-lg bg-accent-blue px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-accent-blue-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Admin
        </button>
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase">
                Username
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase hidden sm:table-cell">
                Created
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-navy-400 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="px-4 py-12 text-center text-navy-500">
                  Loading...
                </td>
              </tr>
            ) : admins.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-12 text-center text-navy-500">
                  No admins found
                </td>
              </tr>
            ) : (
              admins.map((admin) => (
                <tr
                  key={admin._id}
                  className="border-b border-white/5 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 text-white font-medium">
                    {admin.username}
                  </td>
                  <td className="px-4 py-3 text-navy-400 hidden sm:table-cell">
                    {new Date(admin.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleDelete(admin._id, admin.username)}
                      className="rounded p-1.5 text-navy-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                      title="Delete admin"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Create Admin Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Create Admin</h3>
              <button
                onClick={() => {
                  setShowCreate(false);
                  setError("");
                }}
                className="rounded-lg p-1 text-navy-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={4}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                  placeholder="Min 4 characters"
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreate(false);
                    setError("");
                  }}
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="flex-1 rounded-lg bg-accent-blue px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-accent-blue-dark transition-colors disabled:opacity-50"
                >
                  {creating ? "Creating..." : "Create Admin"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
