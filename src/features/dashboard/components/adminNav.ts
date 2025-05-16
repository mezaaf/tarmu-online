import { Newspaper, Settings2 } from "lucide-react";

export const adminNav = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Postingan",
      url: "#",
      icon: Newspaper,
      isActive: true,
      items: [
        {
          title: "Khutbah Jumat",
          url: "#",
        },
        {
          title: "Tokoh",
          url: "#",
        },
        {
          title: "Tanya Jawab",
          url: "#",
        },
        {
          title: "Cerpen",
          url: "#",
        },
        {
          title: "Sastra",
          url: "#",
        },
        {
          title: "Resensi",
          url: "#",
        },
        {
          title: "Puisi",
          url: "#",
        },
        {
          title: "Warta",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};
