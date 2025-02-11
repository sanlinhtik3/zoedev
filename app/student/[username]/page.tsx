"use client";

import { StudentProfile } from "@/app/ui/student/student-profile";

type params = {
  params: {
    username?: string;
  };
};

export default function Page({ params }: params) {
  const { username } = params;

  return (
    <div className="">
      <StudentProfile username={username} />
    </div>
  );
}
