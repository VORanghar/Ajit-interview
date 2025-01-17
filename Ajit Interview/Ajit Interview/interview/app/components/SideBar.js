"use client";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => router.push("/screen1")}>Screen 1</li>
        <li onClick={() => router.push("/screen2")}>Screen 2</li>
        <li onClick={() => router.push("/screen3")}>Screen 3</li>
      </ul>
    </div>
  );
};
export default SideBar;
