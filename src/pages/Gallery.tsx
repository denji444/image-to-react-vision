
import Layout from "../components/Layout";

interface ImageItem {
  id: number;
  src: string;
  title: string;
}

const galleryItems: ImageItem[] = [
  {
    id: 1,
    src: "/lovable-uploads/fefe84f5-1563-4625-b489-1569efed1942.png",
    title: "Cameliya"
  },
  {
    id: 2,
    src: "/lovable-uploads/bc4dde62-3e9e-49aa-ba54-78e03b5947b5.png",
    title: "yae miko"
  },
  {
    id: 3,
    src: "/lovable-uploads/9bb0cbfd-b324-4d52-90d8-bd168e5f8e59.png",
    title: "Yinlin"
  },
  {
    id: 4,
    src: "/lovable-uploads/fefe84f5-1563-4625-b489-1569efed1942.png",
    title: "Lumine"
  },
  {
    id: 5,
    src: "/lovable-uploads/bc4dde62-3e9e-49aa-ba54-78e03b5947b5.png",
    title: "Citlali"
  },
  {
    id: 6,
    src: "/lovable-uploads/9bb0cbfd-b324-4d52-90d8-bd168e5f8e59.png",
    title: "Chasca"
  }
];

const Gallery = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Image Gallery</h1>
        <h2 className="text-xl mb-8">Explore Our Services and Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-3 text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
