import { TheCatAPI } from "@thatapicompany/thecatapi";
import { useEffect, useState } from "react"

const api_key = import.meta.env.VITE_CAT_API_KEY
const theCatAPI = new TheCatAPI(api_key);

interface CatImage {
    id: string;
    url: string;
  }

const CatHeroPage = () => {
    const [cats, setCats] = useState<CatImage[]>([])
    
    useEffect(() => {
        theCatAPI.images
      .searchImages({limit: 12})
      .then((images) => {
        setCats(images)
      })
      .catch((error) => {
        console.log(`An error occured: ${error}`)
      });
    }, [])
  
    return (
    <div className="w-full h-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 pb-4">
            {cats.map((cat: CatImage, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                    src={cat.url} 
                    alt={`Cat ${index + 1}`} 
                    className="w-full h-full object-cover"
                />
                </div>
            ))}
        </div>
    </div>
    );
}

export default CatHeroPage