export const Itinerary = ({title, name, photo_url, price, duration, hashtag, comments}) => {
    return (
        <div className="card bg-base-300 shadow-xl m-5">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo_url} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <p>Autor: {name}</p>
                <p>Price: {price}</p>
                <p>Duration: {duration}</p>
                <p>{hashtag}</p>
                <p>{comments}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}