export const Card = ({name, country, url}) => {
    return (
        
        <article
            className="relative overflow-hidden rounded-lg shadow transition max-w-[500px] min-w-[300px] max-h-[400px] hover:shadow-lg mx-3 my-4"
        >
            <img
                alt={name}
                src={url}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div
                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
                <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg text-white">
                        {name}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {country}
                    </p>
                </div>
            </div>
        </article>
    )
}