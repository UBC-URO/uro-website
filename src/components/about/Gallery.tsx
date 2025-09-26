import CarouselComponent from "../home/carousel";

export const Gallery = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Moments from Our Community</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Snapshots from mixers, showcases, workshops, and conferences.</p>
            </div>
            <div className="max-w-5xl mx-auto">
                <CarouselComponent />
            </div>
        </>
    );
};
