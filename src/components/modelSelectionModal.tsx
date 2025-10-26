'use client'
import Link from "next/link";
import { ModelData, MODELS_DATA } from "@/lib/models.utils";

import { usePathname } from "next/navigation";

const ModelSelectionModal = () => {
    const pathname = usePathname();
    console.log(pathname)
    console.log('here is the path', pathname.split('/').pop())
    const selectedModel = pathname.split('/').pop();
    return (
        <div className="py-10 ">
            {/* <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Attipas Models</h2> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {Object.values(MODELS_DATA).map((model: ModelData) => (
                    <Link
                        key={model.slug}
                        href={`/models/${model.slug}`}
                        className={`
                    py-3 px-4 text-center text-l font-medium rounded transition-all border-2 border-border hover:bg-[#eb9d65] hover:text-white ${selectedModel === model.slug.toLowerCase() && 'bg-[#eb9d65] text-white'}`}
                    >
                        {model.name}
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default ModelSelectionModal;




