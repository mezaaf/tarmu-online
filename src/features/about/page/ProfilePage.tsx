import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeadingFeaturePage from "@/components/fragments/HeadingFeaturePage.tsx";
import Fasilitas from "../components/Fasilitas";
import Sejarah from "../components/Sejarah";
import Visi from "../components/Visi";

const ProfilePage = () => {
  return (
    <SectionContainer className="mt-12 flex flex-col items-center">
      <Tabs defaultValue="sejarah" className="w-xs md:w-2xl lg:w-7xl">
        <HeadingFeaturePage
          title="Profil PonPes"
          subtitle="Tarbiyatul Mutathowi'in"
        />
        <TabsList className="flex w-full items-center justify-between border-b bg-transparent p-0">
          <TabsTrigger
            value="sejarah"
            className="lg-text-base data-[state=active]:text-tosca dark:data-[state=active]:text-tosca data-[state=active]:border-tosca data-[state=active]:dark:border-tosca data-[state=active]:bg-tosca/10 data-[state=active]:dark:bg-tosca/10 cursor-pointer text-xs data-[state=active]:rounded-t-xl data-[state=active]:border-b-2 md:text-sm"
          >
            Sejarah
          </TabsTrigger>
          <TabsTrigger
            value="visi"
            className="lg-text-base data-[state=active]:text-tosca dark:data-[state=active]:text-tosca data-[state=active]:border-tosca data-[state=active]:dark:border-tosca data-[state=active]:bg-tosca/10 data-[state=active]:dark:bg-tosca/10 cursor-pointer text-xs data-[state=active]:rounded-t-xl data-[state=active]:border-b-2 md:text-sm"
          >
            Visi & Misi
          </TabsTrigger>
          <TabsTrigger
            value="asrama"
            className="lg-text-base data-[state=active]:text-tosca dark:data-[state=active]:text-tosca data-[state=active]:border-tosca data-[state=active]:dark:border-tosca data-[state=active]:bg-tosca/10 data-[state=active]:dark:bg-tosca/10 cursor-pointer text-xs data-[state=active]:rounded-t-xl data-[state=active]:border-b-2 md:text-sm"
          >
            Sarana & Prasarana
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sejarah">
          <Sejarah />
        </TabsContent>
        <TabsContent value="visi">
          <Visi />
        </TabsContent>
        <TabsContent value="asrama">
          <Fasilitas />
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default ProfilePage;
