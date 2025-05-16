"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    title: "Khutbah Jum'at",
    href: "/articles/khutbah",
  },
  {
    id: 2,
    title: "Tokoh",
    href: "/articles/figure",
  },
  {
    id: 3,
    title: "Warta",
    href: "#",
  },
  {
    id: 4,
    title: "Tanya Jawab",
    href: "/articles/qa",
  },
  {
    id: 5,
    title: "Cerpen",
    href: "/articles/cerpen",
  },
  {
    id: 6,
    title: "Sastra",
    href: "/articles/sastra",
  },
  {
    id: 7,
    title: "Resensi",
    href: "/articles/resensi",
  },
  {
    id: 8,
    title: "Puisi",
    href: "/articles/puisi",
  },
];
const Category = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Kategori</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Link key={category.id} href={category.href} className="w-full">
              <Button
                variant={"transparent"}
                className="border-tosca hover:bg-tosca w-full rounded-full border-2 transition-all duration-300 hover:text-white"
              >
                {category.title}
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
