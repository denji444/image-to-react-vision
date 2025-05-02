
import Layout from "../components/Layout";
import { Card, CardContent } from "@/components/ui/card";

interface ImageItem {
  id: number;
  src: string;
  title: string;
  character?: string;
}

const galleryItems: ImageItem[] = [
  {
    id: 1,
    src: "/lovable-uploads/f45efb2c-0fd1-462e-a261-0203f6a1f9d0.png",
    title: "Genshin Impact",
    character: "Rosaria"
  },
  {
    id: 2,
    src: "/lovable-uploads/28b02893-7cb2-42e2-b3f1-8db6a7b93c8d.png",
    title: "Crimson Flames",
    character: "Diluc"
  },
  {
    id: 3,
    src: "/lovable-uploads/d3bc2a2a-867f-4208-a2f6-dfd110e7ed78.png",
    title: "Cherry Blossom",
    character: "Yae Miko"
  },
  {
    id: 4,
    src: "/lovable-uploads/d883b662-3e4a-45d8-87d5-ae1f72563f19.png",
    title: "Midnight Chains",
    character: "Tartaglia"
  },
  {
    id: 5,
    src: "/lovable-uploads/4b1f7c68-b7da-4a1a-bcc5-44ae9256fb27.png",
    title: "Autumn Reader",
    character: "Barbara"
  },
  {
    id: 6,
    src: "/lovable-uploads/db936604-b0dc-43fc-b949-2fd273568e99.png",
    title: "Azure Shadows",
    character: "Qiqi"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Genshin Impact Gallery</h1>
        <h2 className="text-xl mb-8">Character Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative pb-[160%]"> {/* Using percentage padding for aspect ratio */}
                <img 
                  src={item.src} 
                  alt={`${item.character || ''} - ${item.title}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 bg-white/90">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                {item.character && <p className="text-sm text-gray-600">{item.character}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
