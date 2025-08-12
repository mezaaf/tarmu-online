import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ArticleCard = () => {
  return (
    <Card className="pt-0 border-none shadow-none bg-transparent group">
      <CardHeader className="px-0">
        <Link href={"#"}>
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={"/images/home/history-img2.svg"}
              alt="history"
              width={1200}
              height={720}
              className="w-full object-cover object-center group-hover:rotate-5 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              priority
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="px-0 w-full">
        <Link href={"#"}>
          <h1 className="line-clamp-2 text-lg sm:text-xl lg:text-2xl hover:text-pondok-primary transition-colors duration-300 ease-in-out">
            5 Great Ways to Protect the Community Resources
          </h1>
        </Link>
      </CardContent>
      <CardFooter className="px-0 flex items-center justify-between">
        <p className="text-muted-foreground">18 Jul 2025</p>
        <Link href={"#"}>
          <Button
            size={"xs"}
            variant={"ghost"}
            className="cursor-pointer group rounded-full bg-transparent dark:bg-transparent  hover:text-pondok-primary dark:hover:text-pondok-primary transition-colors duration-300 ease-in-out"
          >
            Baca Sekarang{" "}
            <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
