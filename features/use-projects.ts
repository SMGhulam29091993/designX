import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "sonner";

export const useCreateProject = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (prompt: string) => {
      return await axios
        .post("api/project", {
          prompt,
        })
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      router.push(`/project/${data.data.id}`);
    },
    onError: (err) => {
      console.log("Project creation error:", err);
      toast.error("Failed to create project. Please try again.");
    },
  });
};

export const useGetProjects = (userId: string) => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/api/project");
      return res.data.data;
    },
    enabled: !!userId, // Only run this query if userId is available
  });
};
