"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, X } from "lucide-react";

export default function PlaceOrderPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    requirement: "",
    deliveryDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<"success" | "error" | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong");
        setModal("error");
        return;
      }

      setModal("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        requirement: "",
        deliveryDate: "",
      });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setModal("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-white">Place an Order</h1>
        <p className="mt-4 text-lg text-navy-400">
          Tell us about your project. We&apos;ll review your requirements and
          get back to you within 1 business day.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
              placeholder="John Doe"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                placeholder="+880 1XXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Address *
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
              placeholder="City, Country"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Project Requirements *
            </label>
            <textarea
              name="requirement"
              value={form.requirement}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue resize-none"
              placeholder="Describe your project — what you need designed, any existing files, technical requirements, constraints..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Approximate Delivery Date *
            </label>
            <input
              type="text"
              name="deliveryDate"
              value={form.deliveryDate}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-navy-500 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue"
              placeholder="e.g., Within 2 weeks, End of March 2026, etc."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent-blue px-6 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-accent-blue-dark hover:shadow-lg hover:shadow-accent-blue/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950 border-t-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Get a Quotation
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {modal === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-accent-green/20 bg-navy-900 p-8 shadow-2xl text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-accent-green" />
            <h3 className="mt-4 text-xl font-bold text-white">
              Request Submitted!
            </h3>
            <p className="mt-2 text-sm text-navy-400">
              We will contact you as soon as possible. Our team typically
              responds within 1 business day.
            </p>
            <button
              onClick={() => setModal(null)}
              className="mt-6 rounded-lg bg-accent-green/10 px-6 py-3 text-sm font-semibold text-accent-green hover:bg-accent-green/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {modal === "error" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-navy-900 p-8 shadow-2xl text-center">
            <AlertCircle className="mx-auto h-16 w-6 text-red-500" />
            <h3 className="mt-4 text-xl font-bold text-white">
              Submission Failed
            </h3>
            <p className="mt-2 text-sm text-navy-400">{errorMsg}</p>
            <button
              onClick={() => setModal(null)}
              className="mt-6 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
