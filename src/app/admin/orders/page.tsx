"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  X,
  Eye,
  Trash2,
  Search,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface Order {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  requirement: string;
  deliveryDate: string;
  status: string;
  createdAt: string;
}

const statusColors: Record<string, string> = {
  unopened: "bg-navy-500/20 text-navy-300 border-navy-500/30",
  contacted: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  confirmed: "bg-accent-green/10 text-accent-green border-accent-green/20",
  work_in_progress: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
  shipped: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  delivered: "bg-green-500/10 text-green-400 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
};

const statusLabels: Record<string, string> = {
  unopened: "Unopened",
  contacted: "Contacted",
  confirmed: "Confirmed",
  work_in_progress: "Work in Progress",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const allStatuses = [
  "all",
  "unopened",
  "contacted",
  "confirmed",
  "work_in_progress",
  "shipped",
  "delivered",
  "cancelled",
];

export default function AdminOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [pagination, setPagination] = useState({ total: 0, page: 1, limit: 10, pages: 1 });
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const fetchOrders = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
      });
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (search) params.set("search", search);

      const res = await fetch(`/api/admin/orders?${params}`);
      if (res.status === 401) {
        const slug = window.location.pathname.split("/")[1];
        router.push(`/${slug}`);
        return;
      }
      const data = await res.json();
      setOrders(data.orders);
      setPagination(data.pagination);
    } catch {
      console.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, search, router]);

  useEffect(() => {
    fetchOrders(1);
  }, [fetchOrders]);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o))
        );
        if (selectedOrder?._id === orderId) {
          setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch {
      console.error("Failed to update status");
    }
  };

  const handleDelete = async (orderId: string) => {
    if (!confirm("Delete this order? This cannot be undone.")) return;

    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o._id !== orderId));
        setSelectedOrder(null);
      }
    } catch {
      console.error("Failed to delete order");
    }
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Orders</h1>
          <p className="text-sm text-navy-400">
            {pagination.total} total orders
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none w-48"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-accent-blue focus:outline-none"
          >
            {allStatuses.map((s) => (
              <option key={s} value={s} className="bg-navy-900">
                {s === "all" ? "All Statuses" : statusLabels[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders table */}
      <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase hidden sm:table-cell">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase hidden md:table-cell">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-navy-400 uppercase hidden lg:table-cell">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-navy-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-navy-500">
                    Loading...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-navy-500">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-white/5 hover:bg-white/[0.02] cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-4 py-3 text-white font-medium">
                      {order.name}
                    </td>
                    <td className="px-4 py-3 text-navy-400 hidden sm:table-cell">
                      {order.email}
                    </td>
                    <td className="px-4 py-3 text-navy-400 hidden md:table-cell">
                      {order.phone}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
                          statusColors[order.status]
                        )}
                      >
                        {statusLabels[order.status]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-navy-400 hidden lg:table-cell">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOrder(order);
                          }}
                          className="rounded p-1.5 text-navy-400 hover:bg-white/5 hover:text-white"
                          title="View details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(order._id);
                          }}
                          className="rounded p-1.5 text-navy-400 hover:bg-red-500/10 hover:text-red-400"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-navy-400">
            Page {pagination.page} of {pagination.pages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => fetchOrders(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white disabled:opacity-30 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => fetchOrders(pagination.page + 1)}
              disabled={pagination.page >= pagination.pages}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white disabled:opacity-30 hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-navy-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg p-1 text-navy-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { label: "Name", value: selectedOrder.name },
                { label: "Email", value: selectedOrder.email },
                { label: "Phone", value: selectedOrder.phone },
                { label: "Address", value: selectedOrder.address },
                { label: "Requirements", value: selectedOrder.requirement },
                { label: "Delivery Date", value: selectedOrder.deliveryDate },
                {
                  label: "Submitted",
                  value: new Date(selectedOrder.createdAt).toLocaleString(),
                },
              ].map((field) => (
                <div key={field.label} className="group">
                  <label className="text-xs font-semibold text-navy-500 uppercase">
                    {field.label}
                  </label>
                  <div className="mt-1 flex items-start gap-2">
                    <p className="flex-1 text-sm text-white break-words">
                      {field.value}
                    </p>
                    <button
                      onClick={() => handleCopy(field.value, field.label)}
                      className="shrink-0 rounded p-1 text-navy-500 opacity-0 group-hover:opacity-100 hover:bg-white/5 hover:text-white transition-opacity"
                      title="Copy"
                    >
                      {copiedField === field.label ? (
                        <Check className="h-3.5 w-3.5 text-accent-green" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              {/* Status */}
              <div>
                <label className="text-xs font-semibold text-navy-500 uppercase">
                  Status
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {allStatuses.filter((s) => s !== "all").map((status) => (
                    <button
                      key={status}
                      onClick={() =>
                        handleStatusChange(selectedOrder._id, status)
                      }
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                        selectedOrder.status === status
                          ? statusColors[status]
                          : "border-white/10 text-navy-500 hover:border-white/20 hover:text-navy-300"
                      )}
                    >
                      {statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedOrder(null)}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleDelete(selectedOrder._id)}
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/20 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
