"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Metadata } from 'next';


export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    redirect();
  },[]);
  const redirect = () => {
    router.push("/dashboard");
  };
  return (
    <div>
    </div>
  );
}
