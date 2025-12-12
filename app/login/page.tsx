"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { apiFetch } from "@/lib/api-client";

export default function LoginPage() {
  const router = useRouter();
  const [authUrl, setAuthUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAuthUrl = async () => {
      try {
        setLoading(true);
        const { data } = await apiFetch<{ auth_url: string }>("/auth/google/url?allow_create=false");
        if (data?.auth_url) {
          setAuthUrl(data.auth_url);
          // Google認証URLに自動リダイレクト
          window.location.href = data.auth_url;
        } else {
          setError("認証URLの取得に失敗しました");
          setLoading(false);
        }
      } catch (err) {
        setError("認証URLの取得に失敗しました");
        setLoading(false);
      }
    };
    loadAuthUrl();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#dae4ff]">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#234a96] mb-4"></div>
              <h2 className="text-xl font-semibold text-[#234a96] mb-2">
                Google認証に移動中...
              </h2>
              <p className="text-sm text-gray-600">
                しばらくお待ちください
              </p>
            </div>
          ) : error ? (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                エラーが発生しました
              </h2>
              <p className="text-sm text-gray-600 mb-6">{error}</p>
              <button
                onClick={() => router.push("/")}
                className="bg-[#234a96] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#436eae] transition-colors"
              >
                トップページに戻る
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-[#234a96] mb-4">
                ログイン
              </h2>
              {authUrl && (
                <a
                  href={authUrl}
                  className="inline-block bg-[#234a96] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#436eae] transition-colors"
                >
                  Googleでログイン
                </a>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
