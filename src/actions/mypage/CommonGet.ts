import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

export const getData = async <T>(
  apiUrl: string,
  tag?: string,
  cacheOption: "force-cache" | "no-store" = "force-cache", // 캐싱 옵션 기본값 설정
): Promise<T> => {
  "use server";
  const session: Session | null = await getServerSession(options);
  const token: string = session ? session.user.accessToken : "";

  const fetchOptions: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    next: {
      tags: tag ? [tag] : [],
    },
    cache: cacheOption, // 캐싱 옵션을 바로 설정
  };

  const res = await fetch(`${process.env.BACKEND_URL}${apiUrl}`, fetchOptions);
  if (!res.ok) {
    throw new Error("데이터를 가져오지 못했습니다.");
  }

  const data = (await res.json()) as T;
  return data;
};
